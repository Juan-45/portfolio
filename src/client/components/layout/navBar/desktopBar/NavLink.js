import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  position: "relative",
  height: "initial",
  marginBottom: "0px",
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  lineHeight: 1.4,
  cursor: "pointer",
  background: theme.palette.white.main,
  color: theme.palette.text.primary,
  textDecoration: "unset",

  "&:hover": {
    color: theme.palette.text.primary,
  },

  "&::after, &::before": {
    position: "absolute",
    content: "''",
    zIndex: "1",
    background: theme.palette.glow.dark,
    transition: "width 0.6s ease, box-shadow 0.6s ease",
    height: "2px",
    width: "0%",
    bottom: 0,
    boxShadow: active ? theme.glow.small : "unset",
    width: active ? "50%" : "0%",
  },

  "&::after": {
    right: "50%",
  },

  "&::before": {
    left: "50%",
  },

  "&:hover:after, &:hover:before": {
    boxShadow: theme.glow.small,
    width: "50%",
  },

  "&:first-of-type, &:last-child": {
    "&:hover:after": {
      width: "100%",
    },
    "&::after": {
      width: active ? "100%" : "0%",
    },
    "&::before": {
      width: "2px",
      height: "0%",
      transition: "height 0.4s ease, box-shadow 0.4s ease",
      height: active ? "100%" : "0%",
    },
    "&:hover:before": {
      height: "100%",
    },
  },

  "&:first-of-type": {
    "&::after": {
      right: "unset",
      left: 0,
    },
    "&::before": {
      left: 0,
    },
  },

  "&:last-child": {
    "&::after": {
      right: 0,
    },
    "&::before": {
      right: 0,
      left: "unset",
    },
  },
}));

NavLink.propTypes = {
  active: PropTypes.bool,
};

NavLink.defaultProps = {
  active: false,
};

export default NavLink;
