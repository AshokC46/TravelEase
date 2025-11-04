import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const PackageCard = ({ image, title, price, description }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 4,
        mx: "auto",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1565C0" }}
          >
            ₹{price}
          </Typography>
          <Button
            variant="contained"
            onClick={handleBookNow}
            sx={{
              backgroundColor: "#1565C0",
              "&:hover": { backgroundColor: "#0d47a1" },
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
