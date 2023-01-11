import PropTypes from "prop-types";
import Background from "layout/Background";
import AnimatedQuote from "layout/AnimatedQuote";
import WelcomeButton from "layout/welcome/WelcomeButton";
import FlexColumn from "layout/FlexColumn";
import background from "assets/images/welcome/backgroundWelcome.jpg";
import useCheckTouchScreen from "hooks/useCheckTouchScreen";

const Welcome = ({ children, buttonCallback, renderChildren }) => {
  const { isTouchScreen } = useCheckTouchScreen();

  if (renderChildren) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Background background={background} variant='welcome' />
        <FlexColumn justify='welcome'>
          <AnimatedQuote
            text='"Hay solo dos grandes equivocaciones que se pueden cometer en el
            camino para lograr la maestria de uno mismo, no comenzar y no ir todo
            el camino."'
            glowingTextEffect={true}
          />
          <WelcomeButton
            variant={isTouchScreen ? "mobile" : "glow"}
            onClick={buttonCallback}
          >
            Ingresar
          </WelcomeButton>
        </FlexColumn>
      </>
    );
  }
};

Welcome.prototype = {
  buttonCallback: PropTypes.func.isRequired,
  renderChildren: PropTypes.bool.isRequired,
};

export default Welcome;
