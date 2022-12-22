import { createTheme } from "@mui/material/styles";

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

##### Ancho mínimo para contenedor root MainContainer => minWidth: "360px"

##### Ancho máximo responsive pasados los 1280 para el contenedor de cada página => maxWidth: "1280px"; usar margin auto para centrado si es necesario

##### orientation: portrait => width <= height
*/

const tablet_min_1200 = "@media (min-width:1200px)";
const tablet_min_900 = "@media (min-width:900px)";
const tablet_min_600 = "@media (min-width:600px)";
const mobile_max_700 = "@media (max-width:700px)";
const mobile_max_750 = "@media (max-width:750px)";
const mobile_max_599 = "@media (max-width:599.95px)";

//Único Modo
const common = {
  // "#00796B" Tono verde
  palette: {
    primary: {
      main: "#94c4df",
    },
    secondary: {
      main: "#039BE5", // #81b2cd Tono azul
    },
    glass: {
      main: "#d5d5d570",
    },
    tonalOffset: "0.1",
  },

  breakpoints: {
    values: {
      tablet_min_1200: 1200,
      tablet_min_900: 900,
      tablet_min_600: 600,
      mobile_max_750: 750,
      mobile_max_599: 599.95,
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
      [tablet_min_600]: {
        fontSize: "1.8rem",
      },
      /* [tablet_min_900]: {
        fontSize: "1.9rem",
      },
      [tablet_min_1200]: {
        fontSize: "1.9rem",
      },*/
      [mobile_max_750]: {
        fontSize: "1.2rem",
      },
      [mobile_max_599]: {
        fontSize: "1.2rem",
      },
    },
    subtitle1: {
      lineHeight: "1.2",
      [tablet_min_600]: {
        fontSize: "1.2rem",
      },
      /* [tablet_min_900]: {
        fontSize: "1.9rem",
      },
      [tablet_min_1200]: {
        fontSize: "1.9rem",
      },*/
      [mobile_max_750]: {
        fontSize: "1.1rem",
      },
      [mobile_max_599]: {
        fontSize: "1.1rem",
      },
    },
    body1: {
      lineHeight: "1.4",
      [tablet_min_600]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      /* [tablet_min_900]: {
        fontSize: "1.9rem",
      },
      [tablet_min_1200]: {
        fontSize: "1.9rem",
      },*/
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
      [tablet_min_600]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      /* [tablet_min_900]: {
        fontSize: "1.9rem",
      },
      [tablet_min_1200]: {
        fontSize: "1.9rem",
      },*/
      [mobile_max_750]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      [mobile_max_599]: {
        fontSize: "1rem",
      },
    },
    caption: {
      lineHeight: "1.4",
      fontSize: "0.9rem",
      /*[tablet_min_600]: {
        fontSize: "0.9rem",
      },
       [tablet_min_900]: {
        fontSize: "1.9rem",
      },
      [tablet_min_1200]: {
        fontSize: "1.9rem",
      },
      [mobile_max_750]: {
        fontSize: "0.8rem",
      },*/
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
        variant: "contained",
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 2,
        // responsive: true,
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
        underline: "hover",
      },
      styleOverrides: {
        root: ({ responsive }) => {
          if (responsive) {
            return {};
          } else {
            return {
              lineHeight: 2,
              marginBottom: "0px",
            };
          }
        },
      },
    },
  },
};

const theme = createTheme(common);

export { theme };
