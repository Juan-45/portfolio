import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const WelcomeButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "300px",
  marginTop: theme.spacing(5),
}));

export default WelcomeButton;
