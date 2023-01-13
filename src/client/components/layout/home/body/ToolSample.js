import AnimatedH1 from "layout/AnimatedH1";
import FadeInText from "layout/FadeInText";
import GridForAnimation from "layout/home/GridForAnimation";
import MainAnimatedContainer from "layout/home/body/MainAnimatedContainer";
import { Box } from "@mui/material";
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
import useTriggerOnScroll from "hooks/useTriggerOnScroll";

const { keyFramesGroup } = theme;

const { growingBorder, fade } = keyFramesGroup;

const { bottomBorder, rightBorder, leftBorder } = growingBorder;

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

const movingBorderDuration = 1; // default 0.3

const scroll = keyframes({
  to: {
    transform: "translateX(calc(-130px * 13))",
  },
});

const TextContainer = ({
  children,
  triggerAnimation,
  movingBorderDuration,
}) => (
  <GridForAnimation
    sx={{
      pb: theme.spacing(3),
      "&::after": {
        //2do
        animation: triggerAnimation
          ? `${movingBorderDuration}s linear 0.3s forwards ${leftBorder.down}`
          : "unset",
      },
      "&::before": {
        //3ro
        animation: triggerAnimation
          ? `${movingBorderDuration}s linear 0.6s forwards ${bottomBorder.toRight}`
          : "unset",
      },
    }}
  >
    {children}
  </GridForAnimation>
);

const Carousel = ({ triggerAnimation, movingBorderDuration }) => (
  <GridForAnimation
    sx={{
      //highway-slider
      position: "relative",
      display: "flex",
      height: "130px",
      justifyContent: "center",
      alignItems: "center",
      "&::before": {
        //4to
        animation: triggerAnimation
          ? `${rightBorder.down} ${movingBorderDuration}s 0.9s forwards linear `
          : "unset",
      },
    }}
  >
    <Box
      sx={{
        //highway-barrier
        overflowX: "hidden",
        position: "absolute",
        width: `calc(100% - ${theme.spacing(4)})`,
        height: `calc(100% - ${theme.spacing(2)})`,
        bottom: "0",

        opacity: "0",
        visibility: "hidden",
        //2doA
        animation: triggerAnimation
          ? `1s cubic-bezier(0.11, 0, 0.5, 0) 1.3s forwards ${fade}`
          : "unset",

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
              animation: triggerAnimation
                ? `${scroll} 20s linear infinite`
                : "unset",
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
                position: "relative",
                "&::after": {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  zIndex: "-1",
                  content: "''",
                  background: "inherit",
                  filter: "blur(2px)",
                  transform: "scale(0.8)",
                  opacity: "0",
                  transition: "opacity 0.2s linear, transform 0.2s linear",
                },
                "&:hover:after": {
                  transform: "scale(1.4)",
                  opacity: "0.5",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </GridForAnimation>
);

const ToolSample = () => {
  const [targetEl, trigger] = useTriggerOnScroll();

  return (
    <MainAnimatedContainer
      ref={targetEl}
      triggerAnimation={trigger}
      bordersDelay={1.2}
    >
      <TextContainer
        triggerAnimation={trigger}
        movingBorderDuration={movingBorderDuration}
      >
        <AnimatedH1
          str='Herramientas'
          /*1roA*/
          initialDelay={0.3}
          triggerAnimation={trigger}
        />
        <FadeInText
          str='HTML, CSS3, JS ES6 2015, React.js V17, MUI, React Router, Axios, Formik, Yup,
  Webpack, Babel, GitHub, Visual Studio Code, Visual Studio.'
          variant='body'
          type='word'
          initialDelay={1.3}
          /*3roA*/
          triggerAnimation={trigger}
        />
      </TextContainer>
      <Carousel
        triggerAnimation={trigger}
        movingBorderDuration={movingBorderDuration}
      />
    </MainAnimatedContainer>
  );
};

export default ToolSample;
