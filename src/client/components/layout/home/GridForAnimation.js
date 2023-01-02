import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const GridForAnimation = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
  "&::after, &::before": {
    content: "''",
    display: "block",
    position: "absolute",
    backgroundColor: theme.palette.glow.dark,
    boxShadow: theme.glow.small,
  },
}));

export default GridForAnimation;
