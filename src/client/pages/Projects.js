import FlexColumn from "layout/FlexColumn";
import { Box, Typography } from "@mui/material";
import preview1 from "assets/images/projects/preview1.jpg";
import preview2 from "assets/images/projects/preview2.png";
import preview3 from "assets/images/projects/preview3.png";

const Projects = () => {
  return (
    <FlexColumn sx={{ overflow: "hidden", alignItems: "end" }}>
      <Box
        sx={{
          marginTop: "180px",

          position: "relative",
          width: "350px",
          height: "350px",
          backgroundImage: `url(${preview1})`,
          backgroundSize: "cover",
          transition: "ease-in-out .3s",
          zIndex: "2",

          "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            bottom: "0",
            left: "0",
            margin: "auto",
            background: "inherit",
            backgroundPosition: "bottom",
            filter: "blur(40px) saturate(0%)",
            transform: "scaleX(0.4)",
            transition: "ease-in-out .4s",
            borderRadius: "50%",
            transformOrigin: "right",
            opacity: "0",
            zIndex: "-1",
          },

          "&:hover": {
            // borderRadius: "0",
            width: "450px",
            height: "450px",
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14)",
            "&::before": {
              width: "100%",
              opacity: "0.18",
              filter: "blur(10px) saturate(100%)",
              transform: "scale(2.8) translate3d(-18%, 0px, 0px)",
            },
            "& .container__info": {
              transform: "translate3d(-60%,0px,0px)",
              opacity: "1",
            },
          },
        }}
      >
        <Box
          className='container__info'
          sx={{
            position: "relative",
            lineHeight: "1.8",
            transition: "ease-in-out .3s",
            opacity: "0",
            color: "black",
            //"&:hover": {},
          }}
        >
          <Typography variant='h1'> Test</Typography>
        </Box>
      </Box>
    </FlexColumn>
  );
};

export default Projects;
