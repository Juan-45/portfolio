import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { theme } from "theme/theme";
import { getStyleOnCondition } from "helpers/getStyleOnCondition";

const FadeInScaleBody = ({ children, delay, trigger, sx, variant }) => {
  const { fadeInScaleStyle } = theme;

  return (
    <Typography
      sx={{
        ...getStyleOnCondition(trigger, () => fadeInScaleStyle["0.5-1"](delay)),
        ...sx,
      }}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

FadeInScaleBody.propTypes = {
  delay: PropTypes.number.isRequired,
  trigger: PropTypes.bool,
};

FadeInScaleBody.defaultProps = {
  trigger: true,
};

export default FadeInScaleBody;
