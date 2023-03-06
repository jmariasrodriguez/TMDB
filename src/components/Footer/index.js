import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as tmdbIcon } from "../../assets/tmdb.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import {
  ContainerFooter,
  ContainerFooterSections,
  IconImage,
} from "./styleFooter";

const Footer = () => {
  const navigate = useNavigate();
  const handleClickLinkeIn = () => {
    navigate(
      (window.location.href = "https://es.linkedin.com/in/jmariasrodriguez")
    );
  };
  const handleClickGitHub = () => {
    navigate((window.location.href = "https://github.com/jmariasrodriguez"));
  };

  return (
    <ContainerFooter>
      <ContainerFooterSections sx={{flexDirection:{xs:"column", sm:"row"}}}>
       <Box>
        <IconImage  sx={{ maxWidth: "15%" }}>
          <SvgIcon
            component={tmdbIcon}
            inheritViewBox
            style={{ width: "75px", height: "75px" }}
          />
        </IconImage>
       </Box>

        <Box>
          <Typography variant="body2" fontWeight="500" color="#f9f9f9" align="center">
            This product uses the TMDB API but is not endorsed or certify by
            TMDB
          </Typography>
        </Box>
      </ContainerFooterSections>

      <ContainerFooterSections>
        <IconImage >
          <IconButton onClick={handleClickLinkeIn}>
            <LinkedInIcon sx={{ color: "#0e76a8" }} fontSize="large" />
          </IconButton>
        </IconImage>
        <IconImage >
          <IconButton onClick={handleClickGitHub}>
            <GitHubIcon sx={{ color: "#101010" }} fontSize="large" />
          </IconButton>
        </IconImage>
      </ContainerFooterSections>
    </ContainerFooter>
  );
};

export default Footer;
