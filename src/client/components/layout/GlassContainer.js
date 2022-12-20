import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const GlassContainer = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  background: "#d5d5d570",
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));

export default GlassContainer;
