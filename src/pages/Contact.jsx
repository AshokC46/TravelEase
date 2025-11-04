import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Send } from "@mui/icons-material";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Box
      sx={{
        py: 2,

        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: "20px",
          maxWidth: "520px",
          width: "100%",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#0d47a1",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, color: "text.secondary" }}
        >
          Have questions or travel plans in mind? We’d love to hear from you!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            endIcon={<Send />}
            sx={{
              py: 1.3,
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "30px",
              background: "linear-gradient(90deg, #1976d2, #64b5f6)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #42a5f5)",
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
