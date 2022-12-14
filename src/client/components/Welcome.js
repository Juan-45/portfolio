import Container from "layout/welcome/Container";
import { Typography, Box, Button } from "@mui/material";

const Welcome = ({ children }) => {
  return (
    <>
      <Container>
        <Typography
          variant='h1'
          sx={{ fontWeight: "600", fontFamily: "Kaushan", width: "85%" }}
        >
          "Hay solo dos grandes equivocaciones que se pueden cometer en el
          camino para lograr la maestria de uno mismo, no comenzar y no ir todo
          el camino."
        </Typography>
        <Typography variant='h2'>
          Test h2: Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
        </Typography>
        <Typography variant='subtitle1'>
          Test subtitle1: Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
        </Typography>
        <Typography variant='body'>
          Test body: Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
        </Typography>
        <Typography variant='button'>
          Test button: Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
        </Typography>
        <Typography variant='caption'>
          Test caption: Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
        </Typography>
        <Button
          variant='contained'
          sx={{
            // mt: "150px",
            width: { xs: "150px", sm: "300px" },
            //fontSize: "1.5rem",
          }}
        >
          Ingresar
        </Button>
      </Container>
      {children}
    </>
  );
};

export default Welcome;

//desde path URL/, renderizar Welcome, si ingreso renderizar Home
