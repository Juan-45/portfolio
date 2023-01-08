import MainContainer from "layout/MainContainer";
import PageRender from "components/PageRender";
import Welcome from "components/Welcome";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";
import PageContainer from "layout/PageContainer";
import ScrollToTop from "components/ScrollToTop";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "theme/theme";
import { useState } from "react";
import useRouter from "hooks/useRouter";

const App = () => {
  const [renderChildren, setRenderChildren] = useState(/*false*/ true);

  const switchChildToRender = () => setRenderChildren(true);

  const { pathname } = useRouter();

  const homeAndWelcomePath = "/";

  const projectsPath = "/projects";

  const cvPath = "/cv";

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
      mobileIcon: <HomeIcon />,
      state: { from: undefined, activePath: currentlyOnBaseUrl },
    },
    {
      label: "Proyectos",
      path: projectsPath,
      element: <Projects />,
      mobileIcon: <CollectionsBookmarkIcon />,
      state: { from: pathname, activePath: pathname === projectsPath },
    },
    {
      label: "Mi CV",
      path: cvPath,
      element: <Page3 />,
      mobileIcon: <ContactPageIcon />,
      state: { from: pathname, activePath: pathname === cvPath },
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
