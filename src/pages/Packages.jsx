import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PackageCard from "../components/PackageCard";

const packages = [
  {
    title: "Adventure Package",
    price: "29,999",
    description: "7 days in the Himalayas with trekking, camping & rafting.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Escape",
    price: "49,999",
    description: "5-star beach resort with spa, fine dining, and sightseeing.",
    image:
      "https://plus.unsplash.com/premium_photo-1663056025073-a9c4344f8e75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlmZXN0eWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Family Holiday",
    price: "24,999",
    description: "Fun-filled 5 days at a family resort with kids’ activities.",
    image:
      "https://images.unsplash.com/photo-1611516818236-8faa056fb659?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFtaWx5JTIwZ2F0aGVyaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Romantic Getaway",
    price: "34,999",
    description: "Romantic 4-night stay in Santorini with sunset dinner.",
    image:
      "https://plus.unsplash.com/premium_photo-1661274129717-6f32375e0f4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9tYW50aWMlMjBnZXRhd2F5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Cultural Journey",
    price: "27,999",
    description: "Explore Jaipur’s heritage and local experiences for 6 days.",
    image:
      "https://images.unsplash.com/photo-1744555908378-3096a346f5cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
  },
];

const Packages = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Our Travel Packages
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packages.map((pkg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <PackageCard {...pkg} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
