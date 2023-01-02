import GlassContainer from "./GlassContainer";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { theme } from "theme/theme";

const PageContainer = ({ children }) => {
  const { fadeInStyles } = theme;

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
          ...fadeInStyles["0.5"](0.2),
        }}
      />
      {children}
      <Footer />
    </Box>
  );
};

export default PageContainer;
