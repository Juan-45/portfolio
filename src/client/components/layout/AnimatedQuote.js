import PropTypes from "prop-types";
import Quote from "components/layout/Quote";
import Span from "layout/Span";
import { theme } from "theme/theme";
import { getKey } from "helpers/manageReactKey";

const AnimatedQuote = ({ text, glowingTextEffect }) => {
  const splittedText = text.split(" ");

  const { getHoverGlowingStyle, getFadeInStyle } = theme;

  const spans = splittedText.map((word, index) => {
    const delay = 0.4 + index / 5;

    const applyGlowEffect = (glowingTextEffect) => {
      if (glowingTextEffect) {
        return getHoverGlowingStyle();
      }
    };

    return (
      <Span
        key={getKey(word, index)}
        sx={{
          ...getFadeInStyle(0.4, delay),
          pr: "0.5rem",
          ...applyGlowEffect(glowingTextEffect),
        }}
      >
        {word}
      </Span>
    );
  });

  return <Quote variant='h1'>{spans}</Quote>;
};

AnimatedQuote.propTypes = {
  text: PropTypes.string.isRequired,
  glowingTextEffect: PropTypes.bool,
};

AnimatedQuote.defaultProps = {
  glowingTextEffect: false,
};

export default AnimatedQuote;
