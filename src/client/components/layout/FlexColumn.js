import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FlexColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme, variant }) => {
  const home = {
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.divider}`,
  };

  const welcome = {
    justifyContent: "center",
    alignItems: "center",
  };

  const footer = {
    justifyContent: "space-between",
  };

  const getVariantStyles = (variant) => {
    if (variant === "home") {
      return home;
    } else if (variant === "welcome") {
      return welcome;
    } else if (variant === "footer") {
      return footer;
    }
  };

  return {
    padding: `0px ${theme.spacing(2)}`,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    ...getVariantStyles(variant),
  };
});

FlexColumn.propTypes = {
  variant: PropTypes.oneOf(["home", "welcome", "footer"]),
};

export default FlexColumn;
