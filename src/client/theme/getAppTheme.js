import { createTheme } from "@mui/material/styles";
import useCheckOrientation from "hooks/useCheckOrientation";
import useCheckTouchScreen from "hooks/useCheckTouchScreen";

//Único Modo
const common = {
  palette: {
    primary: {
      main: "#039BE5", // "#00796B" Tono verde
    },
    secondary: {
      main: "#039BE5", //Tono azul
    },
    tonalOffset: "0.2",
  },
};

const touchScreensBreakpoints = {
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
};

const desktopBreakpoints = {
  breakpoints: {
    values: {
      md: 1281,
      sm: 1024,
      xs: 640,
    },
  },
};

const touchScreenTheme = {
  portrait: createTheme({
    ...common,
    ...touchScreensBreakpoints.portrait,
  }),
  landscape: createTheme({
    ...common,
    ...touchScreensBreakpoints.landscape,
  }),
};

const desktopTheme = createTheme({
  ...common,
  ...desktopBreakpoints,
});

const getTouchScreenTypography = (theme) => ({
  fontSize: 16,
  h1: {
    lineHeight: "1.5",
    [theme.breakpoints.up("desktop")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.down("desktop")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.down("tablets")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "1.7rem",
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
  body: {
    lineHeight: "1.4",
    [theme.breakpoints.up("desktop")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("desktop")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("tablets")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "0.9rem",
    },
  },
  button: {
    lineHeight: "1",
    [theme.breakpoints.up("desktop")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("desktop")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("tablets")]: {
      fontSize: "1.1rem",
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
});

const desktopTypography = {
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
  body: {
    fontSize: "1rem",
    lineHeight: "1.2",
  },
  button: {
    fontSize: "1rem",
    lineHeight: "1",
  },
  caption: {
    fontSize: "0.9rem",
    lineHeight: "1.2",
  },
};

const getTouchScreenStyles = (theme) => ({
  portrait: {
    typography: getTouchScreenTypography(theme),
  },

  landscape: {
    typography: getTouchScreenTypography(theme),
  },
});

const desktopStyle = {
  typography: desktopTypography,
};

const getAppTheme = () => {
  const { isOnLandScape } = useCheckOrientation();
  const { isTouchScreen } = useCheckTouchScreen();

  const updateTheme = (isOnLandScape, isTouchScreen) => {
    if (isTouchScreen) {
      if (isOnLandScape) {
        console.log("TOUCH DEVICE - LANDSCAPE");
        const landscape = createTheme(
          touchScreenTheme.landscape,
          getTouchScreenStyles(touchScreenTheme.landscape).landscape
        );
        console.log(landscape);
        return landscape;
      } else {
        console.log("TOUCH DEVICE - PORTRAIT");
        const portrait = createTheme(
          touchScreenTheme.portrait,
          getTouchScreenStyles(touchScreenTheme.portrait).portrait
        );
        console.log(portrait);
        return portrait;
      }
    } else {
      console.log("DESKTOP");
      return createTheme(desktopTheme, desktopStyle);
    }
  };

  return updateTheme(isOnLandScape, isTouchScreen);
};

export default getAppTheme;
