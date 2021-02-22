const primary = "#007bff";
const white = "#fff";
const dark = "#1f2a55";
const dark6 = "rgb(31 42 85 / 0.6)";
const dark8 = "rgb(31 42 85 / 0.8)";
const grey = "#aaa";
const mediumGrey = "#3e3e3e";
const lightGrey = "#eee";

export const theme = {
  borderRadius: "4px",
  rounded: "50%",
  borderDark: `1px solid ${mediumGrey}`,
  borderLight: `1px solid ${lightGrey}`,
  palette: {
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: grey,
      contrastText: dark,
    },
    common: {
      dark,
      dark6,
      dark8,
      white,
    },
    grey: {
      main: grey,
      light: lightGrey,
      medium: mediumGrey,
    },
  },
  space: {
    xs: "0.4rem",
    s: "0.8rem",
    m: "1.6rem",
    l: "2rem",
    xl: "2.8rem",
  },
  radius: {
    50: "50%",
  },
  fontSize: {
    14: "1.4rem",
    16: "1.6rem",
    24: "2.4rem",
  },
  opacity: {
    "0.4": "0.4",
    "0.6": "0.6",
    "1": "1",
  },
};
