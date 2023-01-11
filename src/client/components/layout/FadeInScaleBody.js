import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { theme } from "theme/theme";

const FadeInScaleBody = ({ children, delay, sx, variant }) => {
  const { fadeInScaleStyle } = theme;

  return (
    <Typography
      sx={{
        ...fadeInScaleStyle["0.5-1"](delay),
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
};

export default FadeInScaleBody;
