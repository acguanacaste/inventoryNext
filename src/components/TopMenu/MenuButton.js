import {Button, makeStyles} from "@material-ui/core";
import {useRouter} from "next/router";
import theme from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
    active: {
        borderBottom: "0.3rem solid "+theme.palette.background.default,
    },
    inactive: {
        borderBottom: "0.3rem solid "+theme.palette.secondary.main,
    },
    menuButton: {
        borderRadius:0
    }
}))

const MenuButton = ({href, children}) => {
    const classes = useStyles(theme)
    const router = useRouter()
    const active = router.pathname === href? classes.active:classes.inactive
    const handleClick = () => {
        return router.push(href)
    }
    console.log("path", router.pathname)
    return (
        <Button
            onClick={handleClick}
            variant={"contained"}
            color={"secondary"}
            className={classes.menuButton}
        >
         <span className={active}>{children}</span>
        </Button>
    )
}

export default MenuButton
