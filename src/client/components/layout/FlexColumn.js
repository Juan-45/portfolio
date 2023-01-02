import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FlexColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "bottomBorder",
})(({ theme, variant, bottomBorder }) => {
  const home = {
    justifyContent: "center",
  };

  const welcome = {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1280px",
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
    padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minHeight: "100%",
    width: "100%",
    borderBottom: bottomBorder ? `1px solid ${theme.palette.divider}` : "unset",
    ...getVariantStyles(variant),
  };
});

FlexColumn.propTypes = {
  variant: PropTypes.oneOf(["home", "welcome", "footer"]),
  bottomBorder: PropTypes.bool,
};

FlexColumn.defaultProps = {
  bottomBorder: false,
};

export default FlexColumn;
