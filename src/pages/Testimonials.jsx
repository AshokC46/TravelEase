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
      "Our overall experience of the tour was excellent! Our group consisted of 11 adults and 1 child, and we visited several wonderful destinations — New Delhi, Mathura, Vrindavan, Agra, Ayodhya, and Varanasi. The traveller picked us up from the station right on time, and the driver was especially courteous and helpful throughout the journey. The hotels arranged by the agency were comfortable and well-maintained, adding to the pleasant experience. Overall, the trip was truly memorable, and we will cherish these moments forever. Highly recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Liam Patel",
    country: "India",
    review:
      "It was a memorable trip for my family. Mr. Shailendra, the tour manager was prompt in responding to any situation and he helped the travel to go through very smoothly. The hotels were excellent, the cab drivers were very helpful and informative. Overall I will rate the experience as excellent. Desert Safari, visit to Umed Bhavan palace, visiting blue City of Jodhpur and the Jaisalmer War museum were the best part of the tour.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Chen",
    country: "Singapore",
    review:
      "I just wanted to take a moment to sincerely thank you for organizing our family trip to Vietnam. From start to finish, everything was perfectly planned and executed. The itinerary flowed smoothly, the transfers were on time, and every detail was thoughtfully taken care of. The hotels and accommodations you selected were truly amazing – comfortable, well-located, and full of charm. Each day felt special and added so much to our experience. Vin wonders and 7 island tour was just amazing. Culture shows and fireworks at the kiss of the bridge was unforgettable experience. Thanks Jennie, Emi, Vivian and Team. Awesome Vietnam",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "James Anderson",
    country: "USA",
    review:
      "We had planned for 8d and 9n at japan. The complete trip was awesome, our trip was planned by serene holidays. It was a well planned trip and trip advisor DARPAN from serene holidays had enough patience to clarify all our doubts. So overall it was a memorable trip. Thanks to serene holidays and travel triangle for this.",
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
                  width: "70%",
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
