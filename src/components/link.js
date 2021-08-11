import React from "react"
import NextLink from 'next/link'
import {makeStyles} from "@material-ui/core";
import theme from "../theme/theme"

const useStyles = makeStyles((theme) => ({
    link : {
        color:theme.palette.text.link,
        '&:hover': {color:theme.palette.text.hover}
    }
    
}))


const Link = ({href, children, ...props}) =>{
    const classes = useStyles(theme);
    
    return(
        <NextLink href={href} >
            <a {...props} className={classes.link}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link

