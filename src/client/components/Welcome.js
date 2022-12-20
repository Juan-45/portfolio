import Background from "layout/Background";
import FadeInQuote from "layout/welcome/FadeInQuote";
import WelcomeButton from "layout/welcome/WelcomeButton";
import FlexColumn from "layout/FlexColumn";
import background from "assets/images/welcome/background.jpg";
import { useState } from "react";

const Welcome = ({ children }) => {
  const [show, setShow] = useState(false);

  if (show) {
    return <>{children}</>;
  } else {
    return (
      <Background background={background}>
        <FlexColumn variant='welcome'>
          <FadeInQuote
            text='"Hay solo dos grandes equivocaciones que se pueden cometer en el
            camino para lograr la maestria de uno mismo, no comenzar y no ir todo
            el camino."'
          />
          <WelcomeButton onClick={() => setShow(!show)}>Ingresar</WelcomeButton>
        </FlexColumn>
      </Background>
    );
  }
};

export default Welcome;

//desde path URL/, renderizar Welcome, si ingreso renderizar Home
