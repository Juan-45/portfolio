import { Box } from "@mui/material";
import NavLink from "layout/navBar/NavLink";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  zIndex: "1",
  minHeight: "25px",
  width: "100%",
  padding: `${theme.spacing(1)} ${theme.spacing(0)}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  background: theme.palette.white.main,
  boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.divider}`,
  ...theme.fadeInStyles["0.5"](0.2),
}));

const NavBar = ({ navigationOptions }) => {
  const children = navigationOptions.map((item, index) => (
    <NavLink key={`${item.to}-${index}`} to={item.to} state={item.state}>
      {item.label}
    </NavLink>
  ));

  return <Container>{children}</Container>;
};

export default NavBar;
