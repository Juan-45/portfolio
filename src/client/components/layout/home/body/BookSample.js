import PropTypes from "prop-types";
import AnimatedH1 from "layout/AnimatedH1";
import FadeInScaleBody from "layout/FadeInScaleBody";
import GridForAnimation from "layout/home/GridForAnimation";
import MainAnimatedContainer from "layout/home/body/MainAnimatedContainer";
import { Box, Grid } from "@mui/material";
import book1 from "assets/images/home/readings/book1.jpg";
import book2 from "assets/images/home/readings/book2.jpg";
import { styled } from "@mui/material/styles";
import { getStyleOnCondition } from "helpers/getStyleOnCondition";
import useTriggerOnScroll from "hooks/useTriggerOnScroll";
import { theme } from "theme/theme";

const { keyFramesGroup, fadeInStyles } = theme;

const { growingBorder } = keyFramesGroup;

const { bottomBorder, rightBorder, leftBorder } = growingBorder;

const movingBorderDuration = 1;

const ImageContainer = ({ imageUrl, delay, trigger }) => (
  <Box sx={{ ...getStyleOnCondition(trigger, () => fadeInStyles["1"](delay)) }}>
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "200px",
        width: "100%",
        marginBottom: "16px",
        position: "relative",
        "&::after": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "10px",
          left: "-10px",
          zIndex: "-1",
          content: "''",
          background: "inherit",
          filter: "blur(10px)",
          transform: "scale(0.8)",
          opacity: "0",
          transition: "opacity 0.2s linear, transform 0.2s linear",
        },
        "&:hover:after": {
          transform: "scale(1.2)",
          opacity: "0.5",
        },
      }}
    />
  </Box>
);

ImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  trigger: PropTypes.bool.isRequired,
};

const TextContainer = styled(Box)(({ theme }) => ({
  margin: `0px ${theme.spacing(2)}`,
}));

const BookPresentationContainer = React.forwardRef(
  ({ children, sx, ...props }, ref) => (
    <GridForAnimation
      container
      direction='column'
      item
      xs={12}
      sm={6}
      sx={{
        padding: theme.spacing(2),
        ...sx,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </GridForAnimation>
  )
);

const BookSample = () => {
  const [targetEl, trigger] = useTriggerOnScroll();

  const getValueOnCondition = (condition, value) =>
    condition ? value : "unset";

  return (
    <MainAnimatedContainer
      triggerAnimation={trigger}
      //fadeIn-1ro
      //borde-ultimo
      bordersDelay={2.2}
    >
      <Grid container>
        <BookPresentationContainer
          ref={targetEl}
          sx={{
            "&::after": {
              //Borde-2do
              [theme.breakpoints.down("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `${movingBorderDuration}s linear 1s forwards ${rightBorder.down}`
                ),
              },
              [theme.breakpoints.up("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `${movingBorderDuration}s linear 1s forwards ${leftBorder.down}`
                ),
              },
            },
            "&::before": {
              //Borde-3ro
              [theme.breakpoints.down("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `${movingBorderDuration}s linear 1.3s forwards ${bottomBorder.toLeft}`
                ),
              },
              [theme.breakpoints.up("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `0.5s linear 1.3s forwards ${bottomBorder.toRight}`
                ),
              },
            },
          }}
        >
          <AnimatedH1
            str='Actualmente leyendo...'
            /*1roA*/
            initialDelay={0.3}
            triggerAnimation={trigger}
            gutterBottom={false}
            sx={{ marginBottom: theme.spacing(4) }}
          />
          <ImageContainer imageUrl={book1} delay={0.3} trigger={trigger} />
          <TextContainer>
            <FadeInScaleBody delay={1.3} variant='subtitle1' trigger={trigger}>
              Don't make me think
            </FadeInScaleBody>
            <FadeInScaleBody delay={1.6} variant='caption' trigger={trigger}>
              Claves de diseño para UX - Experiencia de usuario
            </FadeInScaleBody>
          </TextContainer>
        </BookPresentationContainer>
        <BookPresentationContainer
          sx={{
            [theme.breakpoints.up("lg")]: {
              paddingTop: "108px",
            },
            [theme.breakpoints.down("lg")]: {
              paddingTop: "100.8px",
            },
            [theme.breakpoints.down("md")]: {
              paddingTop: "84px",
            },
            [theme.breakpoints.down("sm")]: {
              paddingTop: "32px",
            },
            "&::after": {
              //Borde-4to
              [theme.breakpoints.down("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `${movingBorderDuration}s linear 1.6s forwards ${leftBorder.down}`
                ),
              },
              [theme.breakpoints.up("sm")]: {
                animation: getValueOnCondition(
                  trigger,
                  `0.5s linear 1.8s forwards ${bottomBorder.toRight}`
                ),
              },
            },
          }}
        >
          <ImageContainer imageUrl={book2} delay={0.6} trigger={trigger} />
          <TextContainer>
            <FadeInScaleBody delay={1.6} variant='subtitle1' trigger={trigger}>
              React design patterns and best practices
            </FadeInScaleBody>
            <FadeInScaleBody delay={1.9} variant='caption' trigger={trigger}>
              Claves de diseño para código limpio y escalabilidad en React.js
            </FadeInScaleBody>
          </TextContainer>
        </BookPresentationContainer>
      </Grid>
    </MainAnimatedContainer>
  );
};

export default BookSample;
