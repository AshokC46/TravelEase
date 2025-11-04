import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
        }}
      >
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </Box>
    </>
  );
};

export default Layout;
