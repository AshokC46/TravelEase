import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImageModal from "../components/ImageModal";

const galleryImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=800&q=80",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Explore Beautiful Destinations
      </Typography>

      <Grid container spacing={2}>
        {galleryImages.map((img, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={i}
            onClick={() => setSelectedImage(img)}
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Gallery ${i}`}
              sx={{
                width: "100%",
                height: { xs: "220px", md: "260px" },
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: 3,
              }}
            />
          </Grid>
        ))}
      </Grid>

      <ImageModal
        open={Boolean(selectedImage)}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </Box>
  );
};

export default Gallery;
