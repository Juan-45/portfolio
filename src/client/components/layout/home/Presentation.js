import PaperContainer from "layout/PaperContainer";
import AnimatedH1 from "layout/AnimatedH1";
import FadeInScaleBody from "layout/FadeInScaleBody";
import Background from "layout/Background";
import FlexColumn from "layout/FlexColumn";
import GridForAnimation from "layout/home/GridForAnimation";
import { Grid, Box } from "@mui/material";
import wolf from "assets/images/home/presentation/Wolf.jpg";
import background from "assets/images/home/backgroundHome.jpeg";
import { theme } from "theme/theme";

const { keyFramesGroup, fadeInAnimation, fadeInStyles, initialAnimationCss } =
  theme;

const { fadeIn } = initialAnimationCss;

const { growingBorder } = keyFramesGroup;

const { bottomBorder, rightBorder, leftBorder, topBorder, allBorders } =
  growingBorder;

const movingBorderTime = 1; // default 0.3

const PhotoContainer = () => (
  <GridForAnimation
    item
    xs={12}
    sm={5}
    sx={{
      "&::after": {
        [theme.breakpoints.down("sm")]: {
          animation: `${rightBorder.down} ${movingBorderTime}s 1s forwards linear`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${bottomBorder.toRight} ${movingBorderTime}s 1s forwards linear`,
        },
      },
      "&::before": {
        [theme.breakpoints.down("sm")]: {
          animation: `${bottomBorder.toLeft} ${movingBorderTime}s 1.3s forwards linear`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${rightBorder.up} ${movingBorderTime}s 1.3s forwards linear`,
        },
      },
    }}
  >
    <Box
      sx={{
        backgroundImage: `url(${wolf})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "100%",
        minHeight: "250px",
        width: "100%",
        ...fadeInStyles["1"](1),
      }}
    />
  </GridForAnimation>
);

const SideTextContainer = ({ children }) => (
  <GridForAnimation
    item
    xs={12}
    sm={7}
    sx={{
      "&::after": {
        [theme.breakpoints.down("sm")]: {
          animation: `${leftBorder.down} ${movingBorderTime}s 1.6s forwards linear`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${topBorder.toRight} ${movingBorderTime}s 1.6s forwards linear`,
        },
      },
      "&::before": {
        [theme.breakpoints.up("sm")]: {
          animation: `${bottomBorder.toRight} ${movingBorderTime}s 1.9s forwards linear`,
        },
      },
    }}
  >
    {children}
  </GridForAnimation>
);

const BottomTextContainer = ({ children }) => (
  <GridForAnimation
    item
    xs={12}
    sx={{
      "&::after": {
        [theme.breakpoints.down("sm")]: {
          animation: `${topBorder.toRight} ${movingBorderTime}s 1.9s forwards linear`,
        },
      },
    }}
  >
    {children}
  </GridForAnimation>
);

const Container = ({ children }) => (
  <FlexColumn variant='home'>
    <Background background={background} />
    <PaperContainer
      sx={{
        border: "2px solid #fff0",
        ...fadeIn,
        animation: `${fadeInAnimation["0.5"](
          0.5
        )}, ${allBorders} 2s 2.2s forwards ease`,
      }}
    >
      {children}
    </PaperContainer>
  </FlexColumn>
);

const Presentation = () => {
  return (
    <Container>
      <Grid container>
        <PhotoContainer />
        <SideTextContainer>
          <AnimatedH1 str='Saludos' initialDelay={1} />
          <FadeInScaleBody delay={1.7} sx={{ marginRight: "-4px" }}>
            Soy un desarrollador front-end y este es mi primer portfolio,
            disfruto de encontrar soluciones simples y de lograr diseños bellos.
            Con cada proyecto me exijo en incorporar cosas nuevas y en que mí
            código sea más claro, más directo, sencillamente mejor.
          </FadeInScaleBody>
        </SideTextContainer>
        <BottomTextContainer>
          <AnimatedH1 str='Mi objetivo' initialDelay={2.2} />
          <FadeInScaleBody delay={3.3}>
            Trabajar en un equipo de programadores profesionales para ponerme a
            prueba y acelerar mi aprendizaje.
          </FadeInScaleBody>
        </BottomTextContainer>
      </Grid>
    </Container>
  );
};

export default Presentation;
