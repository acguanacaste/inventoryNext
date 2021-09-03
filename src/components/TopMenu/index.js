import {useRouter} from "next/router";
import MenuButton from "./MenuButton";

const TopMenu = () => {
    return (
        <nav>
            <MenuButton href={"/"}>Home</MenuButton>
            <MenuButton href={"/upload"}>Upload</MenuButton>
        </nav>
    )
}

export default TopMenu
