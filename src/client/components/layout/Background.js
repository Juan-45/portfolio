import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Background = styled(Box, {
  shouldForwardProp: (prop) => prop !== "background",
})(({ theme, background }) => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
}));

export default Background;
