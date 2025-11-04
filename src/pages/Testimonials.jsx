import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Emma Wilson",
    country: "Australia",
    review:
      "TravelEase made planning my honeymoon effortless! The recommendations were amazing and the booking process was smooth.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Liam Patel",
    country: "India",
    review:
      "Excellent experience! I found the perfect adventure package to Bali. The support team was very responsive and helpful.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Chen",
    country: "Singapore",
    review:
      "Loved how easy it was to explore destinations and filter packages. TravelEase saved me hours of research!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "James Anderson",
    country: "USA",
    review:
      "Such a delightful experience! Beautiful UI, smooth navigation, and the destinations gallery is stunning.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 6,
          color: "#0d47a1",
        }}
      >
        What Our Travelers Say
      </Typography>

      <Grid container spacing={3}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card
                sx={{
                  p: 2,
                  borderRadius: "20px",
                  boxShadow: 3,
                  textAlign: "center",
                  height: "100%",
                  position: "relative",
                  backgroundColor: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  src={t.img}
                  alt={t.name}
                  sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.country}
                </Typography>
                <Rating value={t.rating} readOnly sx={{ my: 1 }} />
                <CardContent sx={{ position: "relative" }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 40,
                      color: "#64b5f6",
                      opacity: 0.3,
                      position: "absolute",
                      top: -10,
                      left: 10,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", mt: 2, zIndex: 2 }}
                  >
                    “{t.review}”
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0d47a1",
            borderRadius: "25px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Share Your Experience
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;
