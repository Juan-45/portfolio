import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { styled } from "@mui/material/styles";
import { theme } from "theme/theme";

const FixedContainer = styled(Box)({
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "2",
});

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "translateX",
})(({ open, translateX }) => ({
  position: "fixed",
  bottom: "0",
  zIndex: "3",
  width: "100%",
  transition: "transform 225ms 225ms cubic-bezier(0, 0, 0.2, 1)",
  transform: open ? "translate(0px, 0px)" : `translate(0px, ${translateX}px)`,
  background: theme.palette.white.main,
}));

Container.propTypes = {
  open: PropTypes.bool,
  translateX: PropTypes.number,
};

Container.defaultProps = {
  open: false,
  translateX: 0,
};

const MobileNavOpening = styled(Button)(({ theme }) => ({
  width: "100%",
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  borderRadius: "0px",
  height: "40px",
  position: "relative",
  borderTop: `1px solid ${theme.palette.divider}`,

  "&:hover": {
    background: theme.palette.secondary.main,
  },

  "@media (hover: hover)": {
    background: theme.palette.white.main,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

const AnimatedArrow = styled(KeyboardDoubleArrowUpIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  transition: "transform 225ms 0ms cubic-bezier(0, 0, 0.2, 1)",
  transform: open ? "rotate(180deg)" : "translate(0deg)",
}));

AnimatedArrow.propTypes = {
  open: PropTypes.bool,
};

AnimatedArrow.defaultProps = {
  open: false,
};

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  position: "relative",
  height: "initial",
  marginBottom: "0px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  background: theme.palette.white.main,
  color: theme.palette.text.primary,
  textDecoration: "unset",
  display: "flex",
  width: "100%",

  "&:hover": {
    color: theme.palette.text.primary,
  },

  "&::after, &::before": {
    position: "absolute",
    content: "''",
    zIndex: "3",
    background: theme.palette.glow.dark,
    transition: "width 0.6s ease, box-shadow 0.6s ease",
    height: "1px",
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
}));

StyledLink.propTypes = {
  active: PropTypes.bool,
};

StyledLink.defaultProps = {
  active: false,
};

const NavLink = ({ label, icon, ...props }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        borderTop: `1px solid ${theme.palette.divider}`,
        height: "52px",
      }}
    >
      <StyledLink {...props}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </StyledLink>
    </ListItem>
  );
};

export { AnimatedArrow, MobileNavOpening, Container, FixedContainer, NavLink };
