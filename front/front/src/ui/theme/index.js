import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: { main: "#1b5e20" },
        secondary: { main: "#212121" }
    },
    typography: {
        subtitle1: {
            fontSize: 28
        },
        h6: {
            fontSize: 14
        }
    }
});

export default theme;
