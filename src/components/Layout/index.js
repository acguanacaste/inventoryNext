import {Container, Grid} from "@material-ui/core";
import TopMenu from "../TopMenu";
import LanguageSwitch from "../LanguageSwitch";

const Layout = ({children}) => {
    return (
        <Container maxWidth={"xl"} >
            <Grid container spacing={2}>
                <Grid item direction="row" container>
                    <Grid item xs={6}>
                        <TopMenu />
                    </Grid>
                    <Grid item xs alignContent={"flex-end"}>
                        <LanguageSwitch />
                    </Grid>
                </Grid>
                <Grid item container>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Layout
