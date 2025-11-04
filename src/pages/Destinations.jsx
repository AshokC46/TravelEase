import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { destinationsData } from "../utils/destinationsData";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const filteredDestinations = destinationsData.filter((dest) =>
    dest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Box sx={{ py: 8, px: { xs: 2, sm: 6, md: 10 } }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 6,
            background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore Our Top Destinations
        </Typography>

        <Box textAlign="center" mb={6}>
          <input
            type="text"
            placeholder="Search destinations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "12px 20px",
              borderRadius: "25px",
              border: "1px solid #ccc",
              width: "60%",
              outline: "none",
              fontSize: "16px",
            }}
          />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={dest.id}
                data-aos="fade-up"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={dest.images[0]}
                      alt={dest.name}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.08)" },
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#203a43" }}
                      >
                        {dest.name}, {dest.country}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Rating
                          name="read-only"
                          value={dest.rating}
                          precision={0.1}
                          readOnly
                          sx={{ mt: 1 }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ color: "gray", mt: 1 }}
                        >
                          ({Math.floor(Math.random() * 500 + 50)} reviews)
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1,
                          color: "text.secondary",
                          minHeight: "50px",
                        }}
                      >
                        {dest.description.slice(0, 60)}...
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mt={2}
                      >
                        <Typography
                          sx={{ fontWeight: "bold", color: "#2c5364" }}
                        >
                          ₹{dest.price.toLocaleString()}
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: "#2c5364",
                            color: "#2c5364",
                            "&:hover": {
                              backgroundColor: "#2c5364",
                              color: "#fff",
                            },
                          }}
                          onClick={() => setSelected(dest)}
                        >
                          View More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Typography
              align="center"
              sx={{ mt: 6, color: "gray", fontStyle: "italic" }}
            >
              No destinations found. Try another search!
            </Typography>
          )}
        </Grid>

        <Dialog
          open={Boolean(selected)}
          onClose={() => setSelected(null)}
          fullWidth
          maxWidth="sm"
        >
          {selected && (
            <>
              <DialogTitle
                sx={{
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
                  color: "white",
                }}
              >
                {selected.name}, {selected.country}
              </DialogTitle>
              <DialogContent dividers>
                <Box sx={{ overflow: "hidden", borderRadius: "10px" }}>
                  <Slider {...sliderSettings}>
                    {selected.images.map((img, i) => (
                      <Box key={i} sx={{ overflow: "hidden" }}>
                        <img
                          src={img}
                          alt={`${selected.name}-${i}`}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            display: "block",
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selected.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#2c5364", mt: 2, fontWeight: "bold" }}
                >
                  Price: ₹{selected.price.toLocaleString()}
                </Typography>
                <Rating
                  name="destination-rating"
                  value={selected.rating}
                  precision={0.1}
                  readOnly
                  sx={{ mt: 1 }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelected(null)}>Close</Button>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
                    color: "white",
                  }}
                  onClick={() => {
                    setSelected(null);
                    navigate("/booking");
                  }}
                >
                  Book Now
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </>
  );
};

export default Destinations;
