import { createTheme } from '@material-ui/core/styles';
import { red, blueGrey, grey, yellow } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#27292f",
            paper: "#424242"
        },
        text: {
            primary : grey["50"],
            secondary: blueGrey["300"],
            contrastText : "#fff",
            link: yellow["600"],
            hover: yellow["300"]
        },
        action: {
            active: "#fff",
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected:"rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground:"rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
        }
    },
    typography : {
        fontFamily: '"Inter var", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 350,
        fontWeightLight: 250,
        fontWeightMedium: 450,
        fontWeightBold: 650,
        h1 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        h2 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        h3 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        h4 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        h5 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        h6 : {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        
        
    
    }
});

export default theme;
