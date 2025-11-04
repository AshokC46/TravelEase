import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const destinationPrices = {
  "Bali, Indonesia": 500,
  "Paris, France": 800,
  "Tokyo, Japan": 900,
  "Dubai, UAE": 700,
  "Maldives, Maldives": 300,
  "Singapore, Singapore": 500,
  "Rome, Italy": 200,
  "Sydney, Australia": 500,
  "New York, USA": 600,
  "London, UK": 550,
};

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    destination: "",
    travelers: 1,
    days: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateTotal = () => {
    if (!form.destination) return 0;
    const basePrice = destinationPrices[form.destination];
    return basePrice * form.travelers * form.days;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.destination) {
      toast.error("Please fill all fields before confirming!");
      return;
    }

    toast.success(
      ` Booking Confirmed for ${form.name} to ${form.destination}!\nTotal: $${calculateTotal()}`
    );

    setForm({ name: "", destination: "", travelers: 1, days: 1 });
  };

  return (
    <Box
      id="booking"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
         Book Your Next Trip
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
        align="center"
        maxWidth={600}
      >
        Plan your dream vacation in minutes. Select your destination and we’ll
        handle the rest!
      </Typography>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%", maxWidth: 500 }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            boxShadow: 3,
            p: 4,
            borderRadius: 3,
            backgroundColor: "#f9f9f9",
          }}
        >
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <FormControl fullWidth required>
            <InputLabel>Destination</InputLabel>
            <Select
              name="destination"
              value={form.destination}
              onChange={handleChange}
            >
              {Object.keys(destinationPrices).map((dest) => (
                <MenuItem key={dest} value={dest}>
                  {dest}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Number of Travelers"
            type="number"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            inputProps={{ min: 1 }}
            required
          />

          <TextField
            fullWidth
            label="Number of Days"
            type="number"
            name="days"
            value={form.days}
            onChange={handleChange}
            inputProps={{ min: 1 }}
            required
          />

          <Typography variant="h6" align="center" color="primary">
             Estimated Total: ${calculateTotal()}
          </Typography>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(90deg, #203a43, #2c5364, #0f2027)",
              },
            }}
          >
            Confirm Booking
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Booking;
