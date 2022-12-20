import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const PaperContainer = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  padding: theme.spacing(4),
}));

export default PaperContainer;
