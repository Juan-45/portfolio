import MainContainer from "layout/MainContainer";
import PageRender from "components/PageRender";
import Welcome from "components/Welcome";
import Home from "pages/Home";
import Projects from "pages/Projects";
import PageContainer from "layout/PageContainer";
import ScrollToTop from "components/ScrollToTop";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "theme/theme";
import { useState } from "react";
import useRouter from "hooks/useRouter";
import cvPath from "assets/cv/CV 2023.pdf";

const App = () => {
  const [renderChildren, setRenderChildren] = useState(/*false*/ true);

  const switchChildToRender = () => setRenderChildren(true);

  const { pathname } = useRouter();

  const homeAndWelcomePath = "/";

  const projectsPath = "/projects";

  const currentlyOnBaseUrl = pathname === homeAndWelcomePath;

  const hideNavAndFooter = currentlyOnBaseUrl && !renderChildren;

  const routesOptions = [
    {
      label: "Home",
      to: homeAndWelcomePath,
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
      anchorProp: {},
      isExternal: false,
    },
    {
      label: "Proyectos",
      to: projectsPath,
      element: <Projects />,
      mobileIcon: <CollectionsBookmarkIcon />,
      state: { from: pathname, activePath: pathname === projectsPath },
      anchorProp: {},
      isExternal: false,
    },
    {
      label: "Mi CV",
      to: cvPath,
      mobileIcon: <ContactPageIcon />,
      state: { from: pathname, activePath: pathname === cvPath },
      anchorProp: { target: "_blank" },
      isExternal: true,
    },
  ];

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
