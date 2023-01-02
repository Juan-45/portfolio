import FadeInText from "layout/FadeInText";
import { getHoverGlowingStyle } from "utilities/layout/getEffects";

const AnimatedH1 = ({ type, str, initialDelay }) => (
  <FadeInText
    str={str}
    type={type}
    variant='h1'
    duration={0.1}
    initialDelay={initialDelay}
    sx={{
      fontFamily: "Kaushan",
      ...getHoverGlowingStyle(),
      width: "fit-content",
    }}
  />
);

AnimatedH1.defaultProps = {
  type: "character",
};

export default AnimatedH1;
