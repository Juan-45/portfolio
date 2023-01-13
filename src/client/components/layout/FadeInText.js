import PropTypes from "prop-types";
import Span from "layout/Span";
import { Typography } from "@mui/material";
import { theme } from "theme/theme";
import { getKey } from "helpers/manageReactKey";
import { getStyleOnCondition } from "helpers/getStyleOnCondition";

const FadeInText = ({
  str,
  variant,
  initialDelay,
  duration,
  type,
  sx,
  triggerAnimation,
  ...props
}) => {
  const { getFadeInStyle } = theme;

  let splitted;

  if (type === "character") {
    splitted = str.split("");
  } else if (type === "word") {
    splitted = str.split(" ");
  }

  const spans = splitted.map((str, index) => {
    const delay = initialDelay + index / 10;
    return (
      <Span
        key={getKey(str, index)}
        sx={{
          ...getStyleOnCondition(triggerAnimation, () =>
            getFadeInStyle(duration, delay)
          ),
          pr: type === "word" ? "0.5rem" : "unset",
        }}
      >
        {str !== " " ? str : "\u00A0"}
      </Span>
    );
  });

  return (
    <Typography variant={variant} sx={sx} {...props}>
      {spans}
    </Typography>
  );
};

FadeInText.propTypes = {
  str: PropTypes.string.isRequired,
  variant: PropTypes.string,
  initialDelay: PropTypes.number,
  duration: PropTypes.number,
  type: PropTypes.oneOf(["character", "word"]).isRequired,
  triggerAnimation: PropTypes.bool,
};

FadeInText.defaultProps = {
  initialDelay: 0.1,
  duration: 0.5,
  triggerAnimation: true,
};

export default FadeInText;
