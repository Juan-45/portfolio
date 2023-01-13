import FlexColumn from "./FlexColumn";
import PaperContainer from "./PaperContainer";
import Background from "./Background";
import background from "assets/images/footer/backgroundFooter.jpg";
import { Typography, Link, Grid } from "@mui/material";
import { theme } from "theme/theme";
import cvPath from "assets/cv/CV 2023.pdf";

const Column_6_4 = ({ children }) => (
  <Grid item xs={6} sm={4} container direction='column' alignItems='start'>
    {children}
  </Grid>
);

const Column_6 = ({ children }) => (
  <Grid item xs={6} container direction='column' alignItems='start'>
    {children}
  </Grid>
);

const RowContainer = ({ children }) => (
  <Grid container spacing={2}>
    {children}
  </Grid>
);

const Header = ({ children }) => (
  <Typography variant='h2' sx={{ fontFamily: "Kaushan" }}>
    {children}
  </Typography>
);

const SubHeader = ({ children }) => (
  <Typography variant='subtitle1'>{children}</Typography>
);

const Footer = () => {
  return (
    <FlexColumn
      justify='spaceBetween'
      sx={{
        minHeight: "50vh",
        pt: theme.spacing(10),
        pb: theme.spacing(10),
      }}
    >
      <Background background={background} />
      <PaperContainer sx={{ marginBottom: "50px", width: "100%" }}>
        <RowContainer>
          <Column_6>
            <Header>Contáctame</Header>
            <Link href='https://www.linkedin.com/in/juan-jos%C3%A9-herrera-8a10201a8/'>
              Mi perfil Linkedin
            </Link>
            {/* <Link>Envíame un e-mail</Link>*/}
          </Column_6>
          {/* <Column_6_4>
            <Header>GitHub</Header>
            <Link>Mi cuenta</Link>
           <Link>Respositorio de este portfolio</Link>
    </Column_6_4>*/}
          <Column_6>
            <Header>Mi CV</Header>
            <Link href={cvPath} target='_blank'>
              Visualizar
            </Link>
          </Column_6>
        </RowContainer>
      </PaperContainer>
      <PaperContainer sx={{ width: "100%" }}>
        <RowContainer>
          <Column_6>
            <SubHeader>Créditos a los autores de las imágenes:</SubHeader>
            <Link href='https://www.freepik.com/free-vector/watercolor-chinese-style-illustration_32052359.htm#query=traditional%20chinese%20painting&position=7&from_view=keyword'>
              Freepik - Image by @freepik
            </Link>
            <Link href='https://www.freepik.com/free-vector/hand-drawn-wolf-face_1165745.htm#page=2&query=wolf%20protrait&position=7&from_view=search&track=ais'>
              Freepik - Image by @freepik
            </Link>
            <Link href='https://www.freepik.com/free-vector/flower-vector-botanical-art-print-remixed-from-artworks-by-hu-zhengyan_16354264.htm#query=traditional%20chinese%20painting&position=15&from_view=keyword'>
              Freepik - Image by rawpixel.com
            </Link>
            <Link href='https://www.freepik.com/free-vector/watercolor-chinese-style-background_31757246.htm#page=2&query=chinese%20paintings&position=7&from_view=keyword'>
              Freepik - Image by pikisuperstar
            </Link>
          </Column_6>
          <Column_6>
            <SubHeader>Créditos al autor de la fuente:</SubHeader>
            <Link href='https://www.fontsquirrel.com/fonts/kaushan-script'>
              Fontsquirrel - Font by Impallari Type
            </Link>
          </Column_6>
        </RowContainer>
      </PaperContainer>
    </FlexColumn>
  );
};

export default Footer;
