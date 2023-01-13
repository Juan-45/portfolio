import FlexColumn from "layout/FlexColumn";
import ToolSample from "layout/home/body/ToolSample";
import BookSample from "layout/home/body/BookSample";
import { theme } from "theme/theme";

const Body = () => {
  return (
    <FlexColumn
      sx={{
        justifyContent: "space-around",
        paddingTop: `${theme.spacing(10)} !important`,
        paddingBottom: "0px !important",
      }}
    >
      <ToolSample />
      <BookSample />
    </FlexColumn>
  );
};

export default Body;
