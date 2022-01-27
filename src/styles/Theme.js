import {extendTheme} from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    primary: {
      light: "#F7F3F0",
      strong: "#CAA386",
    },
    secondary: {
      strong: "#D19163",
      lighty: "#F7F3F0",
      light: "#C9A285",
    },
    text: {
      gray: "#949494",
      grayer: "#767676",
    },
  },
});

export default theme;
