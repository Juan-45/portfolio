import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FlexColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "justify" && prop !== "bottomBorder",
})(({ theme, justify, bottomBorder }) => {
  const center = {
    justifyContent: "center",
  };

  const welcome = {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1280px",
  };

  const spaceBetween = {
    justifyContent: "space-between",
  };

  const getVariantStyles = (justify) => {
    if (justify === "center") {
      return center;
    } else if (justify === "welcome") {
      return welcome;
    } else if (justify === "spaceBetween") {
      return spaceBetween;
    }
  };

  return {
    [theme.breakpoints.up("mobile_max_599")]: {
      padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
    },
    [theme.breakpoints.down("mobile_max_599")]: {
      padding: theme.spacing(2),
    },
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minHeight: "100%",
    width: "100%",
    borderBottom: bottomBorder ? `1px solid ${theme.palette.divider}` : "unset",
    ...getVariantStyles(justify),
  };
});

FlexColumn.propTypes = {
  justify: PropTypes.oneOf(["center", "welcome", "spaceBetween"]),
  bottomBorder: PropTypes.bool,
};

FlexColumn.defaultProps = {
  bottomBorder: false,
};

export default FlexColumn;
