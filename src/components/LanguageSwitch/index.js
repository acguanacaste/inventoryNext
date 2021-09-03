import Link from "../Link";
import {Box} from "@material-ui/core";

const LanguageSwitch = () => {
    return (
        <Box textAlign={"right"} justifyContent="flex-end" flexDirection={"row"} >
            <Link href={"/"} locale="es">ES</Link> | <Link href={"/"} locale={"en"}>EN</Link>
        </Box>
    )
}

export default LanguageSwitch
