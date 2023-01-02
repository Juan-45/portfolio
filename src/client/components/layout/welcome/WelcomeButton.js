import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { getFadeInStyle } from "utilities/layout/getEffects";

const WelcomeButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "300px",
  marginTop: theme.spacing(5),
  ...getFadeInStyle(0.5, 5.5),
}));

export default WelcomeButton;
