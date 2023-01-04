import PropTypes from "prop-types";
import GlassContainer from "./GlassContainer";
import Footer from "./Footer";
import { Box } from "@mui/material";
import NavLink from "layout/NavLink";
import { theme } from "theme/theme";
import { renderOnCondition } from "helpers/renderOnCondition";
import useRouter from "hooks/useRouter";

const PageContainer = ({ children, hide }) => {
  const { fadeInStyles } = theme;

  const { pathname } = useRouter();

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      {renderOnCondition(
        <GlassContainer
          sx={{
            ...fadeInStyles["0.5"](0.2),
          }}
        >
          <NavLink to={"/"} preventScrollReset={false}>
            Home
          </NavLink>
          <NavLink
            to={"/projects"}
            preventScrollReset={false}
            state={{ from: pathname }}
          >
            Proyectos
          </NavLink>
          <NavLink
            to={"/cv"}
            preventScrollReset={false}
            state={{ from: pathname }}
          >
            Mi CV
          </NavLink>
        </GlassContainer>,
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
