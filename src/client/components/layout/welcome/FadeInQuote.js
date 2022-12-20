import PropTypes from "prop-types";
import { getFadeInTextStyle } from "utilities/layout/getEffects";
import { getKey } from "helpers/manageReactKey";
import Quote from "components/layout/Quote";
import Span from "layout/Span";

const FadeInQuote = ({ text }) => {
  const splittedText = text.split(" ");

  const spans = splittedText.map((word, index) => {
    const delay = 0.1 + index / 5;
    return (
      <Span
        key={getKey(word, index)}
        sx={{
          ...getFadeInTextStyle(0.5, delay),
          pr: "0.5rem",
        }}
      >
        {word}
      </Span>
    );
  });

  return <Quote variant='h1'>{spans}</Quote>;
};

FadeInQuote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FadeInQuote;
