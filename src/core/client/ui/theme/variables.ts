/**
 * This file is required by node, it should be valid node js code.
 * We keep the `.ts` extension to keep the types.
 */

import colors from "./colors";

const variables = {
  palette: {
    background: "inherit",
    text: {
      light: colors.white500,
      dark: colors.mono900,
      primary: colors.mono500,
      secondary: colors.mono100,
      "000": colors.pure.white,
      100: colors.mono100,
      500: colors.mono500,
      900: colors.mono900,
    },
    primary: {
      lightest: colors.teal100,
      light: colors.teal300,
      main: colors.teal700,
      darkest: colors.teal900,
      100: colors.streamBlue100,
      200: colors.streamBlue200,
      300: colors.streamBlue300,
      400: colors.streamBlue400,
      500: colors.streamBlue500,
      600: colors.streamBlue600,
      700: colors.streamBlue700,
      800: colors.streamBlue800,
      900: colors.streamBlue900,
    },
    grey: {
      main: colors.grey500,
      lightest: colors.grey200,
      lighter: colors.grey300,
      dark: colors.grey600,
      darkest: colors.grey700,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900,
    },
    negative: {
      100: colors.red100,
      500: colors.red500,
      900: colors.red900,
    },
    positive: {
      100: colors.green100,
      500: colors.green500,
      900: colors.green900,
    },
    warning: {
      100: colors.yellow100,
      500: colors.yellow500,
    },
    error: {
      lightest: colors.red100,
      light: colors.red300,
      main: colors.red500,
      dark: colors.red600,
      darkest: colors.red700,
    },
    success: {
      main: colors.green500,
    },
    divider: "rgba(0, 0, 0, 0.12)",
    input: {
      value: colors.mono500,
      placeholder: colors.mono100,
      icon: colors.mono500,
      label: colors.mono500,
      helper: colors.mono100,
      border: colors.grey500,
      background: colors.pure.white,
      disabled: {
        foreground: colors.grey400,
        background: colors.white500,
      },
      focused: {
        border: colors.teal500,
      },
      error: {
        border: colors.red500,
      },
    },
  },
  fontFamily: {
    primary: "Open Sans",
    secondary: "Nunito",
  },
  lineHeight: {
    bodyComment: 1.45,
    bodyShort: 1.3,
    reset: 1,
    title: 1.15,
    1: "0.75rem",
    2: "0.875rem",
    3: "1rem",
    4: "1.125rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
  },
  fontSize: {
    1: "0.75rem",
    2: "0.875rem",
    3: "1rem",
    4: "1.125rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    iconLarge: "1.5rem",
    iconMedium: "1.125rem",
    iconSmall: "0.875rem",
    iconXSmall: "0.75rem",
  },
  fontWeight: {
    primary: {
      bold: 700,
      semiBold: 600,
      regular: 300,
    },
    secondary: {
      bold: 700,
      regular: 300,
    },
  },
  /* gitter and spacing */
  miniUnitSmall: 4,
  miniUnitLarge: 8,
  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "44px",
    8: "60px",
    9: "84px",
  },
  roundCorners: "3px",
  elevation: {
    main: "1px 0px 4px rgba(0, 0, 0, 0.25)",
  },
};

export type Spacing = keyof typeof variables["spacing"];
export default variables;
