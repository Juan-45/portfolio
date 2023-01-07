import DesktopBar from "layout/navBar/DesktopBar";
import MobileBar from "components/navBar/MobileBar";
import { renderOnCondition } from "helpers/renderOnCondition";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = ({ navigationOptions }) => {
  const max599 = useMediaQuery("(max-width:599.95px)");

  return (
    <>
      {renderOnCondition(
        <DesktopBar navigationOptions={navigationOptions} />,
        !max599
      )}
      {renderOnCondition(
        <MobileBar navigationOptions={navigationOptions} />,
        max599
      )}
    </>
  );
};

export default NavBar;
