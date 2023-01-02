import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { theme } from "theme/theme";

const FadeInScaleBody = ({
  children,
  fadeInDuration,
  scaleDuration,
  delay,
  sx,
}) => {
  const { initialAnimationCss, getFadeInAnimation, getScaleAnimation } = theme;

  const { fadeIn, scale } = initialAnimationCss;

  return (
    <Typography
      sx={{
        ...fadeIn,
        ...scale,
        animation: `${getFadeInAnimation(
          fadeInDuration,
          delay
        )}, ${getScaleAnimation(scaleDuration, delay)}`,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

FadeInScaleBody.propTypes = {
  fadeInDuration: PropTypes.number,
  delay: PropTypes.number.isRequired,
  scaleDuration: PropTypes.number,
};

FadeInScaleBody.defaultProps = {
  fadeInDuration: 0.5,
  scaleDuration: 1,
};

export default FadeInScaleBody;
