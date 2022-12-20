import { keyframes } from "@mui/styled-engine";

const scaleText = keyframes({
  from: {
    transform: "scale(0.94)",
  },
  to: {
    transform: "scale(1)",
  },
});

const fadeText = keyframes({
  from: {
    opacity: "0",
    filter: "blur(4px)",
  },
  to: {
    opacity: "1",
    filter: "blur(0)",
  },
});

const initialStyle = {
  fadeIn: { opacity: "0" },
  scale: {
    transform: "scale(0.94)",
  },
};

const getFadeInAnimation = (duration, delay) =>
  `${fadeText} ${duration}s ${delay}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;

const getScaleAnimation = (duration, delay) =>
  `${scaleText} ${duration}s ${delay}s forwards cubic-bezier(0.5, 1, 0.89, 1)`;

const getFadeInTextStyle = (duration, delay) => ({
  ...initialStyle.fadeIn,
  animation: getFadeInAnimation(duration, delay),
});

const getScaleTextStyle = (duration) => ({
  ...initialStyle.scale,
  animation: getScaleAnimation(duration),
});

export {
  getFadeInTextStyle,
  getScaleTextStyle,
  getFadeInAnimation,
  getScaleAnimation,
  initialStyle,
};
