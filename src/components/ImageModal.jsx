import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const ImageModal = ({ open, image, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogContent
        sx={{
          position: "relative",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.4)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          }}
        >
          <Close />
        </IconButton>

        <img
          src={image}
          alt="Destination"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            borderRadius: "8px",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
