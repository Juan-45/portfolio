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

  const routesOptions = [
    {
      label: "Home",
      path: homeAndWelcomePath,
      element: (
        <Welcome
          buttonCallback={switchChildToRender}
          renderChildren={renderChildren}
        >
          <Home />
        </Welcome>
      ),
      state: { from: undefined },
    },
    {
      label: "Proyectos",
      path: "/projects",
      element: <Page2 />,
      state: { from: pathname },
    },
    {
      label: "Mi CV",
      path: "/cv",
      element: <Page3 />,
      state: { from: pathname },
    },
  ];

  //console.log("THEME", theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme injectFirst />
      <MainContainer>
        <PageContainer hide={hideNavAndFooter} routesOptions={routesOptions}>
          <ScrollToTop />
          <PageRender routesOptions={routesOptions} />
        </PageContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
