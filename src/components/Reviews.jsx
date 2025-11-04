import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Rating,
} from "@mui/material";

const reviews = [
  {
    name: "Aarav Sharma",
    location: "India",
    feedback:
      "My trip to Bali was unforgettable! The booking process was so easy and everything was perfectly organized.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sofia Lopez",
    location: "Spain",
    feedback:
      "The experience in Paris was magical! I loved how smooth everything was. Definitely booking again soon.",
    rating: 4.5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Ethan Walker",
    location: "USA",
    feedback:
      "Booked my Tokyo trip here and it exceeded expectations. Super professional and affordable!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const Reviews = () => {
  return (
    <Box
      id="reviews"
      className="py-16 px-6 md:px-20 bg-gray-50"
      sx={{
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        What Our Travelers Say
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={6}>
        Hear from the people who’ve explored the world with us!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map((r, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Avatar
                  src={r.avatar}
                  sx={{
                    width: 70,
                    height: 70,
                    margin: "0 auto",
                    mb: 2,
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {r.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {r.location}
                </Typography>
                <Rating
                  name="read-only"
                  value={r.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" color="text.primary">
                  “{r.feedback}”
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
