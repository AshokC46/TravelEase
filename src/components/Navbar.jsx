import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Packages", path: "/packages" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          color: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                TravelEase 🌍
              </Typography>

              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
              >
                TravelEase 🌍
              </Typography>

              <Box display="flex" alignItems="center">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        position: "relative",
                        mx: 1.2,
                        color: "white",
                        fontWeight: "bold",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "10%",
                          width: isActive ? "80%" : "0%",
                          height: "4px",
                          backgroundColor: "#ff9800",
                          borderRadius: "3px",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "80%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            color: "white",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItemButton
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: isActive
                      ? "4px solid #ff9800"
                      : "3px solid transparent",
                    "&:hover": {
                      borderBottom: "3px solid #ff9800",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        textAlign: "center",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
