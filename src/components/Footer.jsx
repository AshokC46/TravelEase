import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    
    "&:hover": { color: "#ff9800" },
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "white",
        py: 3,
        px: { xs: 4, sm: 10, md: 16 },
        mt: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              TravelMate 🌍
            </Link>
          </Typography>
          <Typography variant="body2" color="gray.300">
            Explore the world effortlessly with our curated travel packages.
            Adventure awaits you — discover, plan, and travel smart.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2" component={Link} to="/" sx={linkStyle}>
            Home
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="/destinations"
            sx={linkStyle}
          >
            Destinations
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="/booking"
            sx={linkStyle}
          >
            Bookings
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="/reviews"
            sx={linkStyle}
          >
            Reviews
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="/contact"
            sx={linkStyle}
          >
            Contact
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">📍 Hyderabad, India</Typography>
          <Typography variant="body2">📞 +91 98765 43210</Typography>
          <Typography variant="body2">✉️ hello@travelmate.com</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" mb={2}>
            Subscribe for travel deals & new destinations!
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              size="small"
              placeholder="Enter email"
              variant="outlined"
              sx={{
                background: "white",
                borderRadius: "5px",
                input: { color: "black" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "#ff9800",
                color: "white",
                "&:hover": { background: "#e68900" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        mt={6}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <IconButton sx={{ color: "white" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <YouTube />
          </IconButton>
        </Box>
        <Typography variant="body2" mt={{ xs: 2, sm: 0 }}>
          © {new Date().getFullYear()} TravelMate. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
