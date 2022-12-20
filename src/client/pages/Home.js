import { Box, Typography, Paper } from "@mui/material";
import GlassContainer from "layout/GlassContainer";
import WelcomeButton from "layout/welcome/WelcomeButton";
import FadeInText from "components/layout/FadeInText";
import FadeInScaleBody from "components/layout/FadeInScaleBody";
import PageContainer from "components/layout/PageContainer";
import Background from "layout/Background";
import FlexColumn from "layout/FlexColumn";
import PaperContainer from "components/layout/PaperContainer";
import background from "assets/images/home/background.jpeg";

const Home = () => {
  return (
    <PageContainer>
      <Background background={background}>
        <FlexColumn variant='home'>
          <PaperContainer>
            <FadeInText
              str='Saludos'
              variant='h1'
              type='character'
              duration={0.1}
            />
            <FadeInScaleBody delay={0.9}>
              Soy un desarrollador front-end y este es mi primer portfolio,
              disfruto de encontrar soluciones simples y de lograr diseños
              bellos. Con cada proyecto me exijo en incorporar cosas nuevas y en
              que mí código sea más claro, más directo, sencillamente mejor.
            </FadeInScaleBody>
            <FadeInText
              str='Mi objetivo'
              type='character'
              variant='h2'
              duration={0.1}
              initialDelay={1.5}
            />
            <FadeInScaleBody delay={2.6}>
              Trabajar en un equipo de programadores profesionales para ponerme
              a prueba y acelerar mi aprendizaje.
            </FadeInScaleBody>
          </PaperContainer>
        </FlexColumn>
      </Background>
      <FlexColumn>
        <Typography variant='h2'>
          Herramientas: React.js V17, MUI, React Router, Axios, Formik, Yup,
          Webpack, Babel, GitHub, Visual Studio Code, Visual Studio.{" "}
        </Typography>
      </FlexColumn>
    </PageContainer>
  );
};

export default Home;
