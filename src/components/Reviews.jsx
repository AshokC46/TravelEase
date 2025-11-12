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
    name: "Arnik Sharma",
    location: "India",
    feedback:
      "We have booked many holiday packages from them, both International and Domestic. Mr. Mohit and Ms. Durga provide great service. Absolutely hassle free experience in booking the package, getting the itinerary and our stay at the location. Our recent trip to Dubai was an example of this. Would recommend to all and shall get in touch with you again for our next holiday.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sofia Lopez",
    location: "Spain",
    feedback:
      "Had a fantastic 6-day trip to Bali, all thanks to TravelEase! The entire journey was smooth, comfortable, and well-organized. From hotel bookings and transportation to sightseeing and local support, everything was handled with great professionalism. The itinerary was perfectly balanced, allowing us to explore the beauty of Hong Kong without feeling rushed. Truly a memorable experience—highly recommend TravelEase for anyone planning a hassle-free and enjoyable trip! Special thanks to TravelEase team for making our trip memorable.",
    rating: 4.5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Ethan Walker",
    location: "USA",
    feedback:
      "We had an amazing experience with TravelEase! The itinerary they provided for our NewYork trip was absolutely perfect – it covered all the must-see tourist attractions in a well-organized and efficient manner. Every pickup and drop-off was punctual, making the whole trip smooth and stress-free. The attention to detail and excellent planning made our visit unforgettable. Highly recommended for anyone planning a vacation...!!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Mia",
    location: "London",
    feedback:
      "Our recent trip to Dubai was a truly memorable experience. From start to finish, everything was planned with exceptional care, efficiency, and attention to detail. The itinerary was well-balanced, allowing us to experience all the must-see attractions. while also giving us enough time to relax and explore at our own pace. Accommodation, transportation and entry tickets were all handled seamlessly, which made the whole experience incredibly comfortable. Thanks to our trip coordinator, who guided us in each step. We wouldn’t hesitate to travel again with TravelEase.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Emma",
    location: "India",
    feedback:
      "I’m glad to hear you had such a wonderful trip to Hong Kong! Subham sir’s support and perfect suggestions clearly made your experience even more enjoyable. It sounds like the properties in Langkawi were top-notch and the trip was seamless. A 5-star review like this speaks volumes! Please. I specially recommended to TravelEase.",
    rating: 5,
    avatar: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
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
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                maxWidth: 650,
                margin: "0 auto",
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
