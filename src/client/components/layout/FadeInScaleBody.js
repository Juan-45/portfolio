import PropTypes from "prop-types";
import {
  getFadeInAnimation,
  getScaleAnimation,
  initialStyle,
} from "utilities/layout/getEffects";
import { Typography } from "@mui/material";

const FadeInScaleBody = ({
  children,
  fadeInDuration,
  scaleDuration,
  delay,
}) => {
  return (
    <Typography
      /*gutterBottom*/
      sx={{
        ...initialStyle.fadeIn,
        ...initialStyle.scale,
        animation: `${getFadeInAnimation(
          fadeInDuration,
          delay
        )}, ${getScaleAnimation(scaleDuration, delay)}`,
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
