import * as React from "react";

import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container"
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


const pages = [
 
  {
    label: "Home",
    path: "#/"
  }
  ,
  {
    label: "Papers",
    path: "#/papers"
  },
  {
    label: "paperauthor",
    path: "#/papersauthor"
  }
  ,
  {
    label: "track",
    path: "#/track"
  }
  ,
  {
    label: "author",
    path: "#/author"
  }
  ,
  {
    label: "authorsearch",
    path: "#/authorsearch"
  },
  {
    label: "affiliation",
    path: "#/affiliation"
  }
  ,
  {
    label: "institution",
    path: "#/institution"
  }
  ,
  {
    label: "auth",
    path: "#/authenticate"
  }
  ,
  {
    label: "update",
    path: "#/update"
  }
];


const logo = "Home";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

                "& a": {
                  textDecoration: "none"
                }
              }}
            >
              {pages.map((page) => (
                <Link href={page.path} key={page.label}>
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            {logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.path} key={page.label}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
