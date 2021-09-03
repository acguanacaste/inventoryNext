import React from "react";
import NextLink from "next/link";
import {useRouter} from "next/router";
import styles from "./index.module.css"


const Link = ({href, target, children, ...props}) =>{
    
    const t = target?target:'_self';
    const {locale} = useRouter();
    const l =props.locale?props.locale:locale;
   
    return(
        <NextLink href={href} locale={l} >
            <a
                {...props}
                className={styles.ilink}
                target={t}
            >
                {children}
            </a>
        </NextLink>
    )
}

export default Link

