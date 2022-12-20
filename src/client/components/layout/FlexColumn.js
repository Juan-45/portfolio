import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FlexColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme, variant }) => {
  const home = {
    justifyContent: "center",
    height: "100%",
  };

  const welcome = {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const getVariantStyles = (variant) => {
    if (variant === "home") {
      return home;
    } else if (variant === "welcome") {
      return welcome;
    }
  };

  return {
    padding: `0px ${theme.spacing(2)}`,
    display: "flex",
    flexDirection: "column",
    ...getVariantStyles(variant),
  };
});

FlexColumn.propTypes = {
  variant: PropTypes.string,
};

export default FlexColumn;
