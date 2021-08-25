import React from "react";
import NextLink from 'next/link';
import {makeStyles} from "@material-ui/core";
import theme from "../../theme/theme";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    link : {
        color:theme.palette.text.link,
        '&:hover': {color:theme.palette.text.hover},
        '&:visited': {color:theme.palette.text.link}
    }
}))

const Link = ({href, target, children, ...props}) =>{
    
    const classes = useStyles(theme);
    const t = target?target:"_self";
    const {locale} = useRouter()
    const l =props.locale?props.locale:locale
    
    return(
        <NextLink href={href} locale={l} >
            <a {...props} className={classes.link} target={t}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link

