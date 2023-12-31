

import * as React from "react";

import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
/**
 * @navbar return navbar
 */
const pages = [
 
  {
    label: "Authors",
    path: "#/authors"
  },
  {
    label: "Papers",
    path: "#/papers"
  },{
    label:"Admin",
    path:"#/admin"
  }
];

 const settings = [
  {
    label: "Interactivity",
    path: "#/interactivity"
  },
  {
    label: "Wip",
    path: "#/wip"
  },
  {
    label: "Fullpapers",
    path: "#/fullpapers"
  },
  {
    label: "Competition",
    path: "#/competition"
  },
  {
    label: "Doctoral",
    path: "#/doctoral"
  },
  {
    label: "Rapid",
    path: "#/rapid"
  }
 ];


const logo = "Home";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontFamily: "monospace",fontWeight: 700,letterSpacing: ".3rem",color: "inherit",  textDecoration: "none"}}>
            {logo}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography variant="h5" noWrap component="a"
            href="#/"
            sx={{mr: 2, display: { xs: "flex", md: "none" },flexGrow: 1, fontFamily: "monospace", fontWeight: 700,letterSpacing: ".3rem",color: "inherit",textDecoration: "none"}}>
            {logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.path} key={page.label}>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </MenuItem>
              </Link>
            ))}
          </Box>
          <MenuItem sx={{ flexGrow: 0 }}>
            <Tooltip title="view all  Tracks">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <Typography variant="text"  sx={{ color: 'white' }}>View Tracks</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}id="menu-appbar"anchorEl={anchorElUser}anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
              <Link href={setting.path} key={setting.label}>
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem> </Link> 
              ))}
            </Menu>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
