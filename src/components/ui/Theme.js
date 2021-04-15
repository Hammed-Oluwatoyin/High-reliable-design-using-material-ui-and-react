import {createMuiTheme} from "@material-ui/core/styles";

const black = "#000000";
const lightPink = "#FFB6C1";
const white = "#ffffff"

export default createMuiTheme({
    palette: {
      common: {
          black: `${black}`,
          lightPink: `${lightPink}`,
          white: `${white}`
      },
      primary: {
          main: `${lightPink}`
      },
      secondary: {
          main: `${white}`
      },
      
    },
    typography: {
        tab: {
          fontFamily:"Raleway",
          textTransform: "none",
          fontWeight: 700,
          fontSize:"1rem",
          color:`${black}`
        },

        estimate: {
            fontFamily:"pacifico",
            fontsize:"1rem",
            textTransform:"none",
            fontWeight: 700,
            color:`${black}`
        }
    }
});