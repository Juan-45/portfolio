import AnimatedH1 from "layout/AnimatedH1";
import FadeInText from "layout/FadeInText";
import FlexColumn from "layout/FlexColumn";
import PaperContainer from "layout/PaperContainer";
import GridForAnimation from "layout/home/GridForAnimation";
import Span from "../Span";

import html from "assets/images/home/toolsSample/html.svg";
import css from "assets/images/home/toolsSample/css.svg";
import js from "assets/images/home/toolsSample/js.svg";
import react from "assets/images/home/toolsSample/react.svg";
import mui from "assets/images/home/toolsSample/mui.svg";
import router from "assets/images/home/toolsSample/router.svg";
import axios from "assets/images/home/toolsSample/axios.svg";
import formik from "assets/images/home/toolsSample/formik.svg";
import webpack from "assets/images/home/toolsSample/webpack.svg";
import babel from "assets/images/home/toolsSample/babel.svg";
import github from "assets/images/home/toolsSample/github.svg";
import vsc from "assets/images/home/toolsSample/vsc.svg";
import vs from "assets/images/home/toolsSample/vs.svg";

import { theme } from "theme/theme";
import { keyframes } from "@mui/styled-engine";
import {
  initialStyle,
  getFadeInAnimation,
  fadeInStyles,
  keyFramesGroup,
} from "utilities/layout/getEffects";
import { Typography, Paper, Box, Grid } from "@mui/material";

const { growingBorder } = keyFramesGroup;

const { bottomBorder, rightBorder, leftBorder, topBorder, allBorders } =
  growingBorder;

const icons = [
  html,
  css,
  js,
  react,
  mui,
  router,
  axios,
  formik,
  webpack,
  babel,
  github,
  vsc,
  vs,
  html,
  css,
  js,
  react,
  mui,
  router,
  axios,
  formik,
  webpack,
  babel,
  github,
  vsc,
  vs,
];

const scroll = keyframes({
  to: {
    transform: "translateX(calc(-130px * 13))",
  },
});

const TextContainer = ({ children }) => (
  <GridForAnimation
    sx={{
      pb: theme.spacing(5),
      "&::after": {
        animation: `${leftBorder.down} 0.3s 1s forwards linear`,
      },
      "&::before": {
        animation: `${bottomBorder.toRight} 0.3s 1.3s forwards linear`,
      },
    }}
  >
    {children}
  </GridForAnimation>
);

const Contianer = ({ children }) => (
  <FlexColumn variant='home'>
    <PaperContainer
      sx={{
        border: "2px solid #fff0",
        ...initialStyle.fadeIn,
        animation: `${getFadeInAnimation(
          0.5,
          0.5
        )}, ${allBorders} 2s 1.9s forwards ease`,
      }}
    >
      {children}
    </PaperContainer>
  </FlexColumn>
);

const Carousel = () => (
  <GridForAnimation
    sx={{
      //highway-slider
      position: "relative",
      display: "flex",
      height: "130px",
      justifyContent: "center",
      alignItems: "center",
      "&::before": {
        animation: `${rightBorder.down} 0.3s 1.6s forwards linear`,
      },
    }}
  >
    <Box
      sx={{
        //highway-barrier
        overflowX: "hidden",
        position: "absolute",
        width: `calc(100% - ${theme.spacing(4)})`,
        ...initialStyle.fadeIn,
        animation: `${getFadeInAnimation(1, 1.9)}`,
        "&::before, &::after": {
          content: "''",
          position: "absolute",
          zIndex: "1",
          height: "100%",
          [theme.breakpoints.down("sm")]: {
            width: "60px",
          },
          [theme.breakpoints.up("sm")]: {
            width: "180px",
          },
        },
        "&::before": {
          top: "0",
          left: "0",
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        },
        "&::after": {
          top: "0",
          right: "0",
          background:
            "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        },
      }}
    >
      <Box
        sx={{
          // highway-lane
          display: "flex",
          height: "100%",
          width: "calc(130px * 26)",
        }}
      >
        {icons.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "130px",
              animation: `${scroll} 20s linear infinite`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              key={index}
              sx={{
                height: "50px",
                width: "100px",
                background: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </GridForAnimation>
);

const ToolSample = () => {
  return (
    <Contianer>
      <TextContainer>
        <AnimatedH1 str='Herramientas' initialDelay={1} />
        <FadeInText
          str='HTML, CSS3, JS ES6 2015, React.js V17, MUI, React Router, Axios, Formik, Yup,
      Webpack, Babel, GitHub, Visual Studio Code, Visual Studio.'
          variant='body'
          type='word'
          initialDelay={2.3}
        />
      </TextContainer>
      <Carousel />
    </Contianer>
  );
};

export default ToolSample;
