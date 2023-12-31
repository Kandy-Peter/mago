const COLORS = {
  primary: "#D62645",
  primaryOpaque: "#d6264625",
  primaryBlue: "#0494de",
  secondaryBlue: "#005D8D",
  primaryGreen: "#00BFA6",
  primaryGray: "#A7A7A7",
  secondaryGray: "#D8D8D8",
  gray: "#7e7e7e",
  darkGray: "#454545",
  blueOpacity: "#007ab3",
  redOpacity: "#ff7b00",
  greenOpacity: "#3fcc7c",
  orangeOpacity: "#323232",
  green: "#31B700",
  secondaryGreen: "#00a303d0",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  darkWhite: "#e0e0e0",
};

const FONT = {
  light: "DMlightLato",
  regular: "DMregularLato",
  bold: "DMboldLato",
  black: "DMblackLato",
  title: "DMAudiowide",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
