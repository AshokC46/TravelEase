import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "85vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Explore the World with TravelEase 🌍
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Adventure awaits — find your perfect getaway today!
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#1565C0",
          "&:hover": { backgroundColor: "#ff9800" },
          borderRadius: 4,
        }}
        onClick={() => navigate("/destinations")}
      >
        Discover Destinations
      </Button>
    </Box>
  );
};

export default HeroSection;
