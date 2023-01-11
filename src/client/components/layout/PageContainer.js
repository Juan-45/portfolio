import PropTypes from "prop-types";
import Footer from "./Footer";
import { Box } from "@mui/material";
import NavBar from "components/NavBar";
import { renderOnCondition } from "helpers/renderOnCondition";

const PageContainer = ({ children, hide, routesOptions }) => {
  const navigationOptions = routesOptions.map((item) => ({
    to: item.to,
    label: item.label,
    state: item.state,
    mobileIcon: item.mobileIcon,
    linkProp: item.linkProp,
    isExternal: item.isExternal,
  }));

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      {renderOnCondition(
        <NavBar navigationOptions={navigationOptions} />,
        !hide
      )}
      {children}
      {renderOnCondition(<Footer />, !hide)}
    </Box>
  );
};

PageContainer.prototype = {
  hide: PropTypes.bool.isRequired,
};

PageContainer.defaultProps = {
  hide: false,
};

export default PageContainer;
