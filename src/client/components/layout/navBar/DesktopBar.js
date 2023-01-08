import NavLink from "layout/navBar/desktopBar/NavLink";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  zIndex: "1200",
  width: "100%",
  minHeight: "25px",
  padding: `${theme.spacing(1)} ${theme.spacing(0)}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  background: theme.palette.white.main,
  boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.divider}`,
  //...theme.fadeInStyles["0.5"](0.2),
}));

const DesktopBar = ({ navigationOptions }) => {
  const children = navigationOptions.map((item, index) => (
    <NavLink
      key={`${item.to}-${index}`}
      to={item.to}
      state={item.state}
      active={item.state.activePath}
    >
      {item.label}
    </NavLink>
  ));
  return <Container>{children}</Container>;
};

export default DesktopBar;
