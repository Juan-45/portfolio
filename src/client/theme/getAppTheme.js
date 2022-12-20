import { createTheme } from "@mui/material/styles";
import useCheckOrientation from "hooks/useCheckOrientation";
import useCheckTouchScreen from "hooks/useCheckTouchScreen";

//- Unico objeto theme, único uso de createTheme

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

En resolucione grande de monitor (1980x1080):

fullscreenDesktopDevices => landscapeTablets => portraitTablets => portraitPhones

En resolucione mediana de monitor (1280 x 720):  

fullscreenDesktopDevices => landscapeTablets => portraitTablets => portraitPhones

En resolucione baja de monitor (800 x 600):

landscapeTablets => portraitTablets => portraitPhones

##### orientation: portrait => width <= height
*/
//910 al 961
const fullScreenDesktopLg = "@media (min-width:1920px)";
const fullScreenDesktopSm = "@media (min-width:1280px)"; //962
const landscapeTablets =
  "(orientation: landscape) and (((min-width:927px) and (max-width:1280px)) or ((min-width:601px) and (max-width:800px)))";

const landscapePhones =
  "(orientation: landscape) and (((min-width:640px) and (max-width:926px)) or ((min-width:360px) and (max-width:428px)))";

const portraitTablets =
  "(orientation: portrait) and (min-width:501px) and (max-width:910px)";

const portraitPhones =
  "(orientation: portrait) and (min-width:360px) and (max-width:500px)";
//PROBAR: Definir primero las cuatro touchscreen con exactitud, luego tal vez solo tres variantes para desktop (desktop, tablet landscape, mobile portrait) sin orientation,
//de modo tal que al ejecutarse última sobreescriban las anteriores que si tienen orientation
//USAR LA PÁGINA DE MUI Y EMULARLA CON SUS BREAKPOINTS

//Considerando que hay que restar 170px a la altura de la resolución del monitor
//En 800 x 600 eso es celular en landscape,
//La suguiente resolución

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

  typography: {
    fontSize: 16,
    h1: {
      lineHeight: "1.5",
      fontWeight: "600",
      [fullScreenDesktopSm]: {
        fontSize: "3rem",
      },
      [`@media ${landscapeTablets}`]: {
        fontSize: "2.5rem",
      },
      [`@media ${landscapePhones}`]: {
        fontSize: "1.5rem",
      },
      [`@media ${portraitTablets}`]: {
        fontSize: "2.5rem",
      },
      [`@media ${portraitPhones}`]: {
        fontSize: "1.5rem",
      },
    },
    /*  h2: {
      [fullScreenDesktopSm]: {
        fontSize: "1.9rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.9rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "1.3rem",
      },
    },
    subtitle1: {
      lineHeight: "1.2",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "1rem",
      },
    },
    body1: {
      lineHeight: "1.4",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.9rem",
        fontWeight: "400",
      },
    },
    button: {
      lineHeight: "1",
      fontWeight: "600",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.9rem",
      },
    },
    caption: {
      lineHeight: "1.4",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.7rem",
        lineHeight: "1.2",
      },
    },*/
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
        responsive: true,
      },
    },
  },
};

/*const touchScreensBreakpoints = {
  portrait: {
    breakpoints: {
      values: {
        desktop: 1281,
        tablets: 801,
        mobile: 429,
      },
    },
  },
  landscape: {
    breakpoints: {
      values: {
        desktop: 1281,
        tablets: 1281,
        mobile: 927,
      },
    },
  },
};*/

/*const touchScreenTheme = {
  portrait: createTheme({
    ...common,
    ...touchScreensBreakpoints.portrait,
  }),
  landscape: createTheme({
    ...common,
    ...touchScreensBreakpoints.landscape,
  }),
};*/

const getTouchScreenStyle = (theme) => ({
  /* typography: {
    fontSize: 16,
    h1: {
      lineHeight: "1.5",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "3rem",                  
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "2.5rem",                    
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "2rem",                  
      },
    },
    h2: {
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1.9rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.9rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "1.3rem",
      },
    },
    subtitle1: {
      lineHeight: "1.2",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "1rem",
      },
    },
    body1: {
      lineHeight: "1.4",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1rem",
        fontWeight: "600",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.9rem",
        fontWeight: "400",
      },
    },
    button: {
      lineHeight: "1",
      fontWeight: "600",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.9rem",
      },
    },
    caption: {
      lineHeight: "1.4",
      [theme.breakpoints.up("desktop")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down("desktop")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down("tablets")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "0.7rem",
        lineHeight: "1.2",
      },
    },
  },*/

  components: {
    ...common.components,
    MuiPaper: {
      ...common.components.MuiPaper,
      styleOverrides: {
        root: {
          "&.MuiPaper--responsive": {
            background: "black",
            /*   [theme.breakpoints.up("desktop")]: {
              padding: theme.spacing(4),
            },
            [theme.breakpoints.down("desktop")]: {
              padding: theme.spacing(4),
            },
            [theme.breakpoints.down("mobile")]: {
              padding: theme.spacing(2),
            },*/
          },
        },
      },
    },
  },
});

const desktopBreakpoints = {
  breakpoints: {
    values: {
      md: 1281,
      sm: 1025,
      xs: 801,
    },
  },
};

const theme = createTheme(common);

const getDesktopStyle = (theme) => ({
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      lineHeight: "1.5",
    },
    h2: {
      fontSize: "2.4rem",
    },
    subtitle1: {
      fontSize: "1.3rem",
      lineHeight: "1.2",
    },
    body1: {
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "1.2",
    },
    button: {
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "1",
    },
    caption: {
      fontSize: "0.9rem",
      lineHeight: "1.2",
    },
  },

  components: {
    ...common.components,
    MuiPaper: {
      ...common.components.MuiPaper,
      styleOverrides: {
        root: ({ responsive }) => {
          if (responsive) {
            return {
              [fullScreenDesktopSm]: {
                color: "purple",
              },
              [landscapeTablets]: {
                color: "red",
              },
              [landscapePhones]: {
                color: "green",
              },
              [portraitTablets]: {
                color: "cyan",
              },
              [portraitPhones]: {
                color: "blue",
              },
            };
          }
        },
      },
    },
  },
});

const getAppTheme = () => {
  const { isOnLandScape } = useCheckOrientation();
  const { isTouchScreen } = useCheckTouchScreen();

  const updateTheme = (isOnLandScape, isTouchScreen) => {
    if (/*isTouchScreen*/ false) {
      if (isOnLandScape) {
        console.log("TOUCH DEVICE - LANDSCAPE");
        const landscape = createTheme(
          touchScreenTheme.landscape,
          getTouchScreenStyle(touchScreenTheme.landscape)
        );
        console.log(landscape);
        return landscape;
      } else {
        console.log("TOUCH DEVICE - PORTRAIT");
        const portrait = createTheme(
          touchScreenTheme.portrait,
          getTouchScreenStyle(touchScreenTheme.portrait)
        );
        console.log(portrait);
        return portrait;
      }
    } else {
      console.log("DESKTOP");
      /*  const desktop = createTheme(desktopTheme, getDesktopStyle(desktopTheme));
      console.log(desktop);*/
      return createTheme(common);
    }
  };

  return updateTheme(isOnLandScape, isTouchScreen);
};

export { getAppTheme };
