import PropTypes from "prop-types";
import FadeInText from "layout/FadeInText";
import { theme } from "theme/theme";

const { getHoverGlowingStyle } = theme;

const AnimatedH1 = ({ type, str, initialDelay, triggerAnimation }) => {
  const glowEffect = () => {
    if (triggerAnimation) {
      return getHoverGlowingStyle();
    }
  };

  return (
    <FadeInText
      str={str}
      type={type}
      variant='h1'
      duration={0.1}
      initialDelay={initialDelay}
      triggerAnimation={triggerAnimation}
      sx={{
        fontFamily: "Kaushan",
        ...glowEffect(),
        width: "fit-content",
      }}
    />
  );
};

AnimatedH1.propTypes = {
  triggerAnimation: PropTypes.bool,
};

AnimatedH1.defaultProps = {
  type: "character",
  triggerAnimation: true,
};

export default AnimatedH1;
