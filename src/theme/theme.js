import { createTheme } from '@material-ui/core/styles';
import { red, blueGrey, grey, lightGreen } from '@material-ui/core/colors';

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
            link: lightGreen["500"],
            hover: lightGreen["300"]
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
});

export default theme;
