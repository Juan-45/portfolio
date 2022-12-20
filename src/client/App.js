import MainContainer from "layout/MainContainer";
import PageRender from "components/PageRender";
import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "pages/Home";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";
import { Grid, Typography } from "@mui/material";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "./theme/getAppTheme";

const App = () => {
  const navigation = [
    {
      label: "Página 1",
      path: "/",
      element: (
        <Welcome>
          <Home />
        </Welcome>
      ),
    },
    {
      label: "Página 2",
      path: "page2",
      element: <Page2 />,
    },
    {
      label: "Página 3",
      path: "page3",
      element: <Page3 />,
    },
  ];

  const theme = getAppTheme();
  console.log("THEME", theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme injectFirst />
      <MainContainer>
        {/*  <GlassContainer
          sx={{ height: "65px", position: "absolute", width: "100%" }}
  ></GlassContainer>*/}
        {/*   <div>
        <Link to={navigation[0].path}>{navigation[0].label}</Link>
        <Link to={navigation[1].path}>{navigation[1].label}</Link>
        <Link to={navigation[2].path}>{navigation[2].label}</Link>
  </div>*/}
        <PageRender options={navigation} />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
