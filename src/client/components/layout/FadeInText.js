import PropTypes from "prop-types";
import { getFadeInTextStyle } from "utilities/layout/getEffects";
import { getKey } from "helpers/manageReactKey";
import { Typography } from "@mui/material";
import Span from "layout/Span";

const FadeInText = ({ str, variant, pr, initialDelay, duration, type }) => {
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
          ...getFadeInTextStyle(duration, delay),
          pr: `${pr}rem`,
        }}
      >
        {str !== " " ? str : "\u00A0"}
      </Span>
    );
  });

  return <Typography variant={variant}>{spans}</Typography>;
};

FadeInText.propTypes = {
  str: PropTypes.string.isRequired,
  variant: PropTypes.string,
  pr: PropTypes.number,
  initialDelay: PropTypes.number,
  duration: PropTypes.number,
  type: PropTypes.oneOf(["character", "word"]).isRequired,
};

FadeInText.defaultProps = {
  pr: 0,
  initialDelay: 0.1,
  duration: 0.5,
};

export default FadeInText;
