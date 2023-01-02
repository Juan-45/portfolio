import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { keyframes } from "@mui/styled-engine";

const Background = styled(Box, {
  shouldForwardProp: (prop) => prop !== "background" && prop !== "variant",
})(({ theme, background, variant }) => {
  const gradientSize = keyframes({
    from: {},
    to: {
      backgroundSize: "100% 100%",
    },
  });

  const welcome = {
    zIndex: "0",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      mixBlendMode: "screen",
      height: "100%",
      width: "100%",
      background:
        "linear-gradient(135deg, rgb(255 0 0 / 30%) 15%, rgb(0 0 0) 75%, rgb(0 0 0) 90%)",
      backgroundSize: "400% 400%",
      backgroundPosition: "100% 100%",
      backgroundRepeat: "no-repeat",
      animation: `${gradientSize} 0.7s 0.5s forwards ease`,
    },
  };

  const getVariantStyles = (variant) => {
    if (variant === "welcome") {
      return welcome;
    }
  };

  return {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    ...getVariantStyles(variant),
  };
});

export default Background;
