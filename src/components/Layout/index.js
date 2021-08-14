import {Container} from "@material-ui/core";
import TopMenu from "../TopMenu";
const Layout = ({children}) => {
    return (
        <Container maxWidth={"xl"} >
            <TopMenu />
            {children}
        </Container>
        
    )
}

export default Layout
