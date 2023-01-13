import PropTypes from "prop-types";
import PaperContainer from "layout/PaperContainer";
import { theme } from "theme/theme";

const { keyFramesGroup } = theme;

const { growingBorder, fade } = keyFramesGroup;

const { allBorders } = growingBorder;

const MainAnimatedContainer = React.forwardRef(
  ({ children, triggerAnimation, bordersDelay }, ref) => {
    return (
      <PaperContainer
        ref={ref}
        sx={{
          border: "2px solid #fff0",
          opacity: "0",
          visibility: "hidden",
          marginBottom: theme.spacing(10),
          //1ro y ultimo
          animation: triggerAnimation
            ? `0.2s cubic-bezier(0.11, 0, 0.5, 0) 0s forwards ${fade}, 2s ease ${bordersDelay}s forwards ${allBorders}`
            : "unset",
        }}
      >
        {children}
      </PaperContainer>
    );
  }
);

MainAnimatedContainer.propTypes = {
  triggerAnimation: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default MainAnimatedContainer;
