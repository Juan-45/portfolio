import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import background from "assets/images/welcome/background.jpg";

const Container = styled(Box)({
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export default Container;
