import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { USER_IMAGE } from "../../data/constants";
import { useSelector } from "react-redux";
import {Search,StyledInputBase} from "./styleNavbar"
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import Avatar from "@mui/material/Avatar";

 
function Navbar({ navbarTitles }) {

  const sectionData = {
    [USER_IMAGE]: useSelector((state) => state[USER_IMAGE]),
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  
  const handleOpenNavMenu = (event) => {
    // In device view open the menu with the tv series and movies buttons
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenMenuPage = (e) => {
    // Redirect to tv series or movies page
    const routeName = e.target.innerText.toLowerCase().split(" ")[0];
    navigate(`/${routeName}`);
  };

  const handleOnChangeInputSearchBar = (e) => {
    setSearchInput(e.target.value);
  };

  const handleOnClickButtonSearchBar = (e) => {
    // Redirect to the search page (Lens button)
    const encoded = encodeURI(searchInput);
    navigate(`/search/moviesTv?str=${encoded}`);
    setSearchInput("");
  };

  const handleKeyPressInputSearchBar = (e) => {
  // Redirect to the search page (Enter key is pressed while the pointer is on the searchBar)
    if (e.keyCode === 13) {
      const encoded = encodeURI(searchInput);
      navigate(`/search/moviesTv?str=${encoded}`);
      window.location.reload();
      setSearchInput("");
    }
  };

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

  return (
    <AppBar position="relative" sx={{ backgroundColor: "#273088" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="/">
            <LocalMoviesIcon sx={{ fontSize: "2.125rem", mr: 1, color:"#f9f9f9" }} />
        </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: 24,
            }}
          >
            TMDB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu-burger"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navbarTitles.map((page) => (
                <MenuItem key={page} onClick={handleOpenMenuPage}>
                  <Typography textAlign="center" sx={{ fontSize: 16 }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navbarTitles.map((page) => (
              <Button
                key={page}
                onClick={handleOpenMenuPage}
                sx={{ my: 2, color: "#f9f9f9", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box display="flex">
            <Search>
              <IconButton
                onClick={handleOnClickButtonSearchBar}
                sx={{
                  stroke: "#f9f9f9",
                  color: "#f9f9f9",
                  strokeWidth: "1",
                  pr: 0,
                  display: { xs: "none", md: "inline" },
                }}
              >
                <SearchIcon />
              </IconButton>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleOnChangeInputSearchBar}
                onKeyDown={handleKeyPressInputSearchBar}
                value={searchInput}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Link to={`/userFavorites`}>
              {sectionData[USER_IMAGE].data.length > 0? 
                <Avatar alt="userImage" src={sectionData[USER_IMAGE].data} sx={{ bgcolor: "#595858" }}> </Avatar>
                :<Avatar alt="userImage" sx={{ bgcolor: "#595858" }}> <PersonIcon/></Avatar>
              }
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
