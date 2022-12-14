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

const breakpoints = {
  touchScreenPortrait: {
    breakpoints: {
      values: {
        mobile: 429,
        tablets: 801,
        desktop: 1281,
      },
    },
  },
  touchScreenLandscape: {
    breakpoints: {
      values: {
        mobile: 927,
        tablets: 1281,
      },
    },
  },
  desktopNoTouch: {
    breakpoints: {
      values: {
        xs: 600,
        sm: 1281,
      },
    },
  },
};

const theme = {
  touchScreenPortrait: createTheme({
    ...common,
    ...breakpoints.touchScreenPortrait,
  }),
  touchScreenLandscape: createTheme({
    ...common,
    ...breakpoints.touchScreenLandscape,
  }),

  desktopNoTouch: createTheme({
    ...common,
    ...breakpoints.desktopNoTouch,
  }),
};

const devicesStyles = (theme) => ({
  touchScreenPortrait: {
    typography: {
      h3: {
        [theme.breakpoints.down("mobile")]: {},
      },
    },
  },

  touchScreenLandscape: {
    typography: {
      h3: {
        [theme.breakpoints.down("mobile")]: {},
      },
    },
  },

  desktopNoTouch: {
    typography: {
      h3: {
        [theme.breakpoints.down("xs")]: {},
      },
    },
  },
});

const getAppTheme = () => {
  const { isOnLandScape } = useCheckOrientation();
  const { isTouchScreen } = useCheckTouchScreen();

  const updateTheme = (isOnLandScape, isTouchScreen) => {
    if (isTouchScreen) {
      if (isOnLandScape) {
        console.log("TOUCH DEVICE - LANDSCAPE");
        return createTheme(
          theme.touchScreenLandscape,
          devicesStyles(theme.touchScreenLandscape).touchScreenLandscape
        );
      } else {
        console.log("TOUCH DEVICE - PORTRAIT");
        return createTheme(
          theme.touchScreenPortrait,
          devicesStyles(theme.touchScreenPortrait).touchScreenPortrait
        );
      }
    } else {
      console.log("DESKTOP");
      return createTheme(
        theme.desktopNoTouch,
        devicesStyles(theme.desktopNoTouch).desktopNoTouch
      );
    }
  };

  return updateTheme(isOnLandScape, isTouchScreen);
};

export default getAppTheme;
