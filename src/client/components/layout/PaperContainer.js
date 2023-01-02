import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const PaperContainer = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: "0px",
  maxWidth: "900px",
}));

export default PaperContainer;
