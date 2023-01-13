import PaperContainer from "layout/PaperContainer";
import AnimatedH1 from "layout/AnimatedH1";
import FadeInScaleBody from "layout/FadeInScaleBody";
import Background from "layout/Background";
import FlexColumn from "layout/FlexColumn";
import GridForAnimation from "layout/home/GridForAnimation";
import { Grid, Box } from "@mui/material";
import wolf from "assets/images/home/header/Wolf.jpg";
import background from "assets/images/home/backgroundHome.jpeg";
import { theme } from "theme/theme";

const { keyFramesGroup, fadeInStyles } = theme;

const { growingBorder, fade } = keyFramesGroup;

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
        //2do
        [theme.breakpoints.down("sm")]: {
          animation: `${movingBorderTime}s linear 1s forwards ${rightBorder.down}`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${movingBorderTime}s linear 1.1s forwards ${bottomBorder.toRight}`,
        },
      },
      "&::before": {
        //3ro
        [theme.breakpoints.down("sm")]: {
          animation: `${movingBorderTime}s linear 1.3s forwards ${bottomBorder.toLeft}`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${movingBorderTime}s linear 1.3s forwards ${rightBorder.up}`,
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
        //4to
        [theme.breakpoints.down("sm")]: {
          animation: `${movingBorderTime}s linear 1.6s forwards ${leftBorder.down}`,
        },
        [theme.breakpoints.up("sm")]: {
          animation: `${movingBorderTime}s linear 1.6s forwards ${topBorder.toRight}`,
        },
      },
      "&::before": {
        //5to
        [theme.breakpoints.up("sm")]: {
          animation: `${movingBorderTime}s linear 1.9s forwards ${bottomBorder.toLeft}`,
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
          animation: `${movingBorderTime}s linear 1.9s forwards ${topBorder.toRight}`,
        },
      },
    }}
  >
    {children}
  </GridForAnimation>
);

const Container = ({ children }) => (
  <FlexColumn justify='center'>
    <Background background={background} />
    <PaperContainer
      sx={{
        border: "2px solid #fff0",
        opacity: "0",
        visibility: "hidden",
        animation: `0.5s cubic-bezier(0.11, 0, 0.5, 0) 0.5s forwards ${fade}, 2s ease 2.2s forwards ${allBorders}`,
      }}
    >
      {children}
    </PaperContainer>
  </FlexColumn>
);

const Header = () => {
  return (
    <>
      <Container>
        <Grid container>
          <PhotoContainer />
          <SideTextContainer>
            <AnimatedH1 str='Desarrollador front-end' initialDelay={1} />
            <FadeInScaleBody delay={1.7}>
              Cada nuevo proyecto debe ser un desafío, y así, un paso más cerca
              al siguiente nivel.
            </FadeInScaleBody>
            <FadeInScaleBody variant='caption' delay={1.9}>
              Juan José Herrera
            </FadeInScaleBody>
          </SideTextContainer>
          <BottomTextContainer>
            <AnimatedH1 str='Mi objetivo' initialDelay={2.2} />
            <FadeInScaleBody delay={2.9}>
              Trabajar en un equipo de programadores profesionales, aportando
              para el cumplimiento de los objetivos del equipo y aprovechando la
              experiencia de sus integrantes para acelerar mi propio aprendizaje
              en continuidad.
            </FadeInScaleBody>
          </BottomTextContainer>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
