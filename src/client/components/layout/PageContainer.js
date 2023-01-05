import PropTypes from "prop-types";
import Footer from "./Footer";
import { Box } from "@mui/material";
import NavBar from "layout/NavBar";
import { renderOnCondition } from "helpers/renderOnCondition";
import useRouter from "hooks/useRouter";

const PageContainer = ({ children, hide, routesOptions }) => {
  const navigationOptions = routesOptions.map((item) => ({
    to: item.path,
    label: item.label,
    state: item.state,
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
