import { createTheme } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";

/*
##### Pantallas móbiles:
Más chica: 360 x 640
Más grande: 428 x 926

##### Pantallas tablets:
Más chica: 601 x 962
Más grande: 800 x 1280

##### Pantallas monitores:

Más chica: 800 x 600
Mediana: 1280 x 720
Más grande: 1920 x 1080

##### orientation: portrait => width <= height
*/

/*
#################   BREAKPOINTS & MEDIA QUERIES   #################
*/

const tablet_min_1200 = "@media (min-width:1200px)";
const tablet_min_900 = "@media (min-width:900px)";
const tablet_min_600 = "@media (min-width:600px)";
const mobile_max_700 = "@media (max-width:700px)";
const mobile_max_750 = "@media (max-width:750px)";
const mobile_max_599 = "@media (max-width:599.95px)";

const mediaQueries = {
  tablet_min_1200: "@media (min-width:1200px)",
  tablet_min_900: "@media (min-width:900px)",
  tablet_min_600: "@media (min-width:600px)",
  mobile_max_700: "@media (max-width:700px)",
  mobile_max_750: "@media (max-width:750px)",
  mobile_max_599: "@media (max-width:599.95px)",
};

/*
#################   PALETTE   #################
*/

const palette = {
  primary: {
    main: "#b74f48c4",
  },
  secondary: {
    main: "#e2e2e2bf", //#e3cdff
  },
  glow: {
    light: "#ff9e52",
    dark: "#993232",
  },
  white: {
    main: "#fff",
    dark: "#e9e9e9",
    glass1: "#ffffffbf",
    glass2: "#fffffff2",
  },
  black: {
    main: "#000000de",
  },
  text: {
    visited: "#7dc7cc",
  },
  tonalOffset: "0.1",
};

/*
#################   ANIMATIONS   #################
*/

/*
#####   fadeIn   #####
*/

const fade = keyframes({
  from: {
    opacity: "0",
    visibility: "hidden",
    filter: "blur(4px)",
  },
  to: {
    opacity: "1",
    visibility: "visible",
    filter: "blur(0)",
  },
});

const getFadeInStyle = (duration, delay) => ({
  opacity: "0",
  visibility: "hidden",
  animation: `${duration}s cubic-bezier(0.11, 0, 0.5, 0) ${delay}s forwards ${fade}`,
});

const fadeInStyles = {
  0.2: (delay) => getFadeInStyle(0.2, delay),
  0.5: (delay) => getFadeInStyle(0.5, delay),
  1: (delay) => getFadeInStyle(1, delay),
};

/*
#####   scale   #####
*/

const scale = keyframes({
  from: { transform: "scale(0.94)" },
  to: {
    transform: "scale(1)",
  },
});

const getScaleStyle = (duration, delay) => ({
  transform: "scale(0.94)",
  animation: `${duration}s cubic-bezier(0.5, 1, 0.89, 1) ${delay}s forwards ${scale}`,
});

/*
fadeInScale 
*/

const getFadeInScaleStyle = (scaleDuration, fadeInDuration, delay) => ({
  opacity: "0",
  visibility: "hidden",
  transform: "scale(0.94)",
  animation: `${scaleDuration}s cubic-bezier(0.5, 1, 0.89, 1) ${delay}s forwards ${scale}, ${fadeInDuration}s cubic-bezier(0.11, 0, 0.5, 0) ${delay}s forwards ${fade}`,
});

const fadeInScaleStyle = {
  "0.5-1": (delay) => getFadeInScaleStyle(0.5, 1, delay),
};

/*
#####   GLOWING EFFECT   #####
*/

const glow = {
  small: `${palette.glow.light} 0px 5px 10px, ${palette.glow.light} 0px 3.25px 7.5px, ${palette.glow.light} 0px 2.5px 5px, ${palette.glow.light} 0px 1.25px 2.5px`,
  big: `${palette.glow.light} 0px 10px 20px, ${palette.glow.light} 0px 7.5px 15px, ${palette.glow.light} 0px 5px 10px, ${palette.glow.light} 0px 2.5px 5px`,
};

const bottomBorder = {
  toRight: keyframes({
    from: {
      height: "2px",
      left: "0",
      bottom: "0",
      width: "0px",
    },
    to: {
      height: "2px",
      left: "0",
      bottom: "0",
      width: "100%",
    },
  }),
  toLeft: keyframes({
    from: {
      height: "2px",
      right: "0",
      bottom: "0",
      width: "0px",
    },
    to: {
      height: "2px",
      right: "0",
      bottom: "0",
      width: "100%",
    },
  }),
};

const rightBorder = {
  up: keyframes({
    from: {
      width: "2px",
      right: "0",
      bottom: "0",
      height: "0px",
    },
    to: {
      width: "2px",
      right: "0",
      bottom: "0",
      height: "100%",
    },
  }),
  down: keyframes({
    from: {
      width: "2px",
      right: "0",
      top: "0",
      height: "0px",
    },
    to: {
      width: "2px",
      right: "0",
      top: "0",
      height: "100%",
    },
  }),
};

const leftBorder = {
  down: keyframes({
    from: {
      width: "2px",
      left: "0",
      top: "0",
      height: "0px",
    },
    to: {
      width: "2px",
      left: "0",
      top: "0",
      height: "100%",
    },
  }),
  up: keyframes({
    from: {
      width: "2px",
      left: "0",
      bottom: "0",
      height: "0px",
    },
    to: {
      width: "2px",
      left: "0",
      bottom: "0",
      height: "100%",
    },
  }),
};

const topBorder = {
  toRight: keyframes({
    from: {
      width: "0px",
      left: "0",
      top: "0",
      height: "2px",
    },
    to: {
      width: "100%",
      left: "0",
      top: "0",
      height: "2px",
    },
  }),
  toLeft: keyframes({
    from: {
      width: "0px",
      right: "0",
      top: "0",
      height: "2px",
    },
    to: {
      width: "100%",
      right: "0",
      top: "0",
      height: "2px",
    },
  }),
};

const allBorders = keyframes({
  from: {},
  to: {
    border: `2px solid ${palette.glow.dark}`,
    boxShadow: glow.small,
  },
});

const getHoverGlowingStyle = () => ({
  transition: "color 1s linear, text-shadow 1s linear",
  textShadow: "unset",
  "&:hover": {
    color: palette.glow.dark,
    textShadow: glow.big,
    transition: "color 0.2s linear, text-shadow 0.2s linear",
  },
});

const keyFramesGroup = {
  fade,
  scale,
  growingBorder: {
    bottomBorder,
    rightBorder,
    leftBorder,
    topBorder,
    allBorders,
  },
};

//Único Modo
const common = {
  // "#00796B" Tono verde
  palette: palette,

  glow,

  keyFramesGroup,

  fadeInStyles,

  getFadeInStyle,

  getScaleStyle,

  getFadeInScaleStyle,

  fadeInScaleStyle,

  getHoverGlowingStyle,

  breakpoints: {
    values: {
      tablet_min_1200: 1200,
      tablet_min_900: 900,
      tablet_min_600: 600,
      mobile_max_750: 750,
      mobile_max_599: 599.95,
      lg: 1200,
      md: 751,
      sm: 600,
      xs: 0,
    },
  },

  typography: {
    fontSize: 16,
    h1: {
      lineHeight: "1.5",
      fontWeight: "600",
      /*Includes: tablet portrait & mobile landscape*/
      [tablet_min_600]: {
        fontSize: "2.2rem",
      },
      /*Includes: tablet landscape > 900 px*/
      [tablet_min_900]: {
        fontSize: "2.2rem",
      },
      /*Includes: tablet landscape > 1200 px*/
      [tablet_min_1200]: {
        fontSize: "2.5rem",
      },
      /*Includes: mobile landscape < 899px*/
      [mobile_max_750]: {
        fontSize: "1.5rem",
      },
      /*Includes: mobile portrait*/
      [mobile_max_599]: {
        fontSize: "1.5rem",
      },
    },
    h2: {
      lineHeight: 1.5,
      [tablet_min_600]: {
        fontSize: "1.8rem",
      },
      [mobile_max_750]: {
        fontSize: "1.3rem",
      },
      [mobile_max_599]: {
        fontSize: "1.3rem",
      },
    },
    subtitle1: {
      lineHeight: 1.5,
      fontWeight: 600,
      [tablet_min_600]: {
        fontSize: "1.2rem",
      },
      [mobile_max_750]: {
        fontSize: "1.1rem",
      },
      [mobile_max_599]: {
        fontSize: "1.1rem",
      },
    },
    body1: {
      lineHeight: "1.4",
      fontWeight: "600",
      [tablet_min_600]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [mobile_max_750]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      [mobile_max_599]: {
        fontSize: "1rem",
      },
    },
    button: {
      lineHeight: "1",
      fontWeight: "600",
      /* [tablet_min_600]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [mobile_max_750]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      [mobile_max_599]: {
        fontSize: "1rem",
      },*/
    },
    caption: {
      lineHeight: "1.4",
      fontSize: "0.9rem",
      [mobile_max_599]: {
        lineHeight: "1.2",
      },
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        variant: "glow",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.white.glass1,
          boxShadow: theme.shadows[3],
        }),
      },

      variants: [
        {
          props: { variant: "glow" },
          style: ({ theme }) => ({
            border: "none",
            "&:hover": {
              background: theme.palette.white.glass1,
            },
            position: "relative",
            "&::after, &::before": {
              content: '""',
              display: "block",
              position: "absolute",
              width: "20%",
              height: "20%",
              border: "2px solid",
              borderRadius: "2px",
            },

            "&::after": {
              bottom: 0,
              right: 0,
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderBottomColor: theme.palette.black.main,
              borderRightColor: theme.palette.black.main,
              transition:
                "width 0.6s ease 0.5s, height 0.6s ease 0.5s, border-bottom-color 0.5s linear, border-right-color 0.5s linear, box-shadow 0.5s linear",
            },

            "&::before": {
              top: 0,
              left: 0,
              borderBottomColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: theme.palette.black.main,
              borderLeftColor: theme.palette.black.main,
              transition:
                "width 0.6s ease 0.5s, height 0.6s ease 0.5s, border-top-color 0.5s linear, border-left-color 0.5s linear, box-shadow 0.5s linear",
            },

            "&:hover:after, &:hover:before": {
              width: "100%",
              height: "100%",
              boxShadow: theme.glow.small,
            },

            "&:hover:after": {
              borderBottomColor: theme.palette.glow.dark,
              borderRightColor: theme.palette.glow.dark,
              transition:
                "width 0.6s ease, height 0.6s ease, border-bottom-color 0.2s linear 0.5s, border-right-color 0.2s linear 0.5s, box-shadow 0.2s linear 0.5s",
            },

            "&:hover:before": {
              borderTopColor: theme.palette.glow.dark,
              borderLeftColor: theme.palette.glow.dark,
              transition:
                "width 0.6s ease, height 0.6s ease, border-top-color 0.2s linear 0.5s, border-left-color 0.2s linear 0.5s, box-shadow 0.2s linear 0.5s",
            },
          }),
        },
        {
          props: { variant: "mobile" },
          style: ({ theme }) => ({
            border: `2px solid ${theme.palette.black.main}`,
          }),
        },
      ],
    },

    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: ({ responsive }) => {
          if (responsive) {
            return {};
          }
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          lineHeight: 1.4,
          marginBottom: "1rem",
          position: "relative",
          transition: "color 0.6s ease",
          cursor: "pointer",
          "&::after": {
            position: "absolute",
            content: "''",
            bottom: 0,
            left: 0,
            zIndex: "1",
            background: theme.palette.glow.dark,
            height: "2px",
            width: "0%",
            transition: "width 0.6s ease, box-shadow 0.6s ease",
          },
          "&:hover:after": {
            width: "100%",
            boxShadow: theme.glow.small,
          },
          "&:hover": {
            color: theme.palette.text.primary,
          },
        }),
      },

      variants: [
        {
          props: { variant: "nav" },
          style: ({ theme, active }) => ({
            marginBottom: "0px",
            background: theme.palette.white.main,
            color: theme.palette.text.primary,
            padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
            //background: active ? "green" : "initial",
            height: "initial",

            "&::after": {
              right: "50%",
              left: "unset",
            },
            "&:hover:after": {
              width: "50%",
            },
            "&::before": {
              position: "absolute",
              content: "''",
              bottom: 0,
              left: "50%",
              zIndex: "1",
              background: theme.palette.glow.dark,
              width: "0%",
              height: "2px",
              transition: "width 0.4s ease, box-shadow 0.4s ease",
            },
            "&:hover:before": {
              width: "50%",
              boxShadow: theme.glow.small,
            },

            "&:first-of-type, &:last-child": {
              "&:hover:after": {
                width: "100%",
              },
              "&::before": {
                width: "2px",
                height: "0%",
                transition: "height 0.4s ease, box-shadow 0.4s ease",
              },
              "&:hover:before": {
                height: "100%",
                width: "2px",
              },
            },

            "&:first-of-type": {
              "&::after": {
                right: "unset",
                left: 0,
              },
              "&::before": {
                left: 0,
              },
            },

            "&:last-child": {
              "&::after": {
                right: 0,
              },
              "&::before": {
                right: 0,
                left: "unset",
              },
            },
          }),
        },
      ],
    },
  },
};

const theme = createTheme(common);

export { theme };
