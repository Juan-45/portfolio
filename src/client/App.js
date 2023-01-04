import MainContainer from "layout/MainContainer";
import PageRender from "components/PageRender";
import Welcome from "components/Welcome";
import Home from "pages/Home";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";
import PageContainer from "layout/PageContainer";
import ScrollToTop from "components/ScrollToTop";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "theme/theme";
import { useState } from "react";
import useRouter from "hooks/useRouter";

const App = () => {
  const [renderChildren, setRenderChildren] = useState(/*false*/ true);

  const switchChildToRender = () => setRenderChildren(true);

  const { pathname } = useRouter();

  const homeAndWelcomePath = "/";

  const currentlyOnBaseUrl = pathname === homeAndWelcomePath;

  const hideNavAndFooter = currentlyOnBaseUrl && !renderChildren;

  const navigation = [
    {
      label: "Página 1",
      path: homeAndWelcomePath,
      element: (
        <Welcome
          buttonCallback={switchChildToRender}
          renderChildren={renderChildren}
        >
          <Home />
        </Welcome>
      ),
    },
    {
      label: "Página 2",
      path: "projects",
      element: <Page2 />,
    },
    {
      label: "Página 3",
      path: "cv",
      element: <Page3 />,
    },
  ];

  //console.log("THEME", theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme injectFirst />
      <MainContainer>
        <PageContainer hide={hideNavAndFooter}>
          <ScrollToTop />
          <PageRender options={navigation} />
        </PageContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
