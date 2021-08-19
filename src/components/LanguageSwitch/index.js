import Link from "../Link";
import {Box} from "@material-ui/core";

const LanguageSwitch = () => {
    return (
        <Box textAlign={"right"} justifyContent="flex-end" flexDirection={"row"} >
            <Link href={"#"}>ES</Link> | <Link href={"#"}>EN</Link>
        </Box>
    )
}

export default LanguageSwitch
