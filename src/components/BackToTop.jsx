import React, { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: visible ? 1 : 0 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
      >
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
            color: "white",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            width: 56,
            height: 56,
            "&:hover": {
              background: "linear-gradient(90deg, #203a43, #2c5364, #0f2027)",
              transform: "translateY(-3px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
            },
          }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </motion.div>
    </Zoom>
  );
};

export default BackToTop;
