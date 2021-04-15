import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#56B5D5";
const arcOrange = "#FFA530";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "RaleWay",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5em",
      color: `${arcBlue}`,
      lineHeight: "1.5em",
    },
  },
});
