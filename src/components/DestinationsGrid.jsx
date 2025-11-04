import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const destinations = [
  {
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Experience tropical paradise with beaches and temples.",
  },
  {
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "The city of love, lights, and timeless art.",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Crystal waters and luxury overwater villas await you.",
  },
  {
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
    description: "Blend of modern tech and ancient traditions.",
  },
  {
    name: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    description: "The city that never sleeps—vibrant and full of life.",
  },
  {
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
    description: "Iconic blue domes and romantic sunsets by the sea.",
  },
];

const DestinationsGrid = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {destinations.map((dest, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 5,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={dest.image}
                  alt={dest.name}
                  sx={{
                    filter: "brightness(80%)",
                    transition: "filter 0.3s ease",
                    "&:hover": { filter: "brightness(100%)" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    color: "white",
                    py: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {dest.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.85rem", opacity: 0.9 }}
                  >
                    {dest.description}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DestinationsGrid;
