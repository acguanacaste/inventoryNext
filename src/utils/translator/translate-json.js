#!/usr/bin/env node
const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');
const path = require('path');
const agent = require('superagent-promise')(require('superagent'), Promise);
const {Translate} = require('@google-cloud/translate').v2;
let dicc = {};
// Lang Codes https://ctrlq.org/code/19899-google-translate-languages

if (process.argv.length >= 4) {

    //Args
    const inputFile = process.argv[2];
    const destinationCodes = process.argv[3].split(',');

    const transformResponse = (res) => {
        return _.get(JSON.parse(res.text), ['data', 'translations', 0, 'translatedText'], '');
    }

    const getCache = (languageKey) => {
        try {
            dicc[languageKey] = {};
            let fileContent = fs.readFileSync(`./cache/translateCache-${languageKey}.txt`, 'utf-8').split('\n');
            fileContent.map((line)=> {
                let cached = line.split('|');
                if(cached[0]) dicc[languageKey][cached[0]] = cached[1];
            });
        } catch (error) {
        
        }
    }
    const cachedIndex = (key, value, languageKey) => {
        const translation = value[0]
        const line = key + '|' + translation + '\n';
        dicc[languageKey][key] = translation;
        if (!fs.existsSync("./cache")){
                fs.mkdirSync("./cache")
        }
        fs.appendFileSync(`./cache/translateCache-${languageKey}.txt`, line);
        return translation;
    }

     function iterLeaves(value, keyChain, accumulator, languageKey) {
        
        accumulator = accumulator || {};
        keyChain = keyChain || [];
        if (_.isObject(value)) {
            return _.chain(value).reduce((handlers, v, k) => {
                return handlers.concat(iterLeaves(v, keyChain.concat(k), accumulator, languageKey));
            }, []).flattenDeep().value();
        } else {
            if(typeof value !== 'string')
                return value;

            return function () {
                
                if(!(value in dicc[languageKey])) {
                    console.log(_.template('Translating <%= value %> to <%= languageKey %>')({value, languageKey}));
    
                    let prom;
                    //Translates individual string to language code
                    const translate = new Translate();
                    
                    prom =  translate.translate(value, languageKey);

                    return prom.then((res) => cachedIndex(value, res, languageKey))
                    .catch((err) => console.log(err))
                    .then((text) => {
                        //Sets the value in the accumulator
                        _.set(accumulator, keyChain, text);
    
                        //This needs to be returned to it's eventually written to json
                        return accumulator;
                    });
                }
                else {
                   // console.log(value + ' cached: ' + dicc[languageKey][value]);
                    _.set(accumulator, keyChain, dicc[languageKey][value]);
                    return accumulator;
                }
            };
        }
    }

    Promise.all(_.reduce(destinationCodes, (sum, languageKey) => {
        let outPath = ""
        let  nameTemplate = '<%= languageKey %>-<%= timeStamp %>.json';
        if (process.argv.length == 5){
            outPath = process.argv[4]
            nameTemplate = '<%= languageKey %>.json';
        }
        let fileName = _.template(nameTemplate)({
            
            languageKey,
            timeStamp: moment().unix()
        });
        fileName = outPath === ""?"./"+fileName:outPath+"/"+fileName
        //read languageKey Cache.
        getCache(languageKey);

        //Starts with the top level strings
        return sum.concat(_.reduce(iterLeaves(JSON.parse(fs.readFileSync(path.resolve(inputFile), 'utf-8')), undefined, undefined, languageKey), (promiseChain, fn) => {
            return promiseChain.then(fn);
        }, Promise.resolve()).then((payload) => {
            fs.writeFileSync(fileName, JSON.stringify(payload));
        }).then(_.partial(console.log, 'Successfully translated all nodes, file output at ' + fileName)));
    }, [])).then(() => {
        process.exit();
    });

} else {
    console.error('You must provide an input json file and a comma-separated list of destination language codes.');
}
