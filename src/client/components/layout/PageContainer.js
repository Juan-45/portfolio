import { Box } from "@mui/material";
import GlassContainer from "./GlassContainer";

const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <GlassContainer
        sx={{
          width: "100%",
          height: "65px",
          position: "fixed",
          top: 0,
          zIndex: 1,
        }}
      />
      {children}
    </Box>
  );
};

export default PageContainer;
