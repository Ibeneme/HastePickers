import React from "react";

const ScrollingBanner = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#0F6DF9",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "10px 0",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <div
        style={{
          color: "#fff", // Changed color to contrast with the background
          fontWeight: "bold",
          fontSize: "16px",
          whiteSpace: "nowrap",
          fontFamily: "var(--fontFamily)",
        }}
      >
        <h2 style={{fontSize: 16}}>
          {" "}
          Our services are currently available exclusively in Port Harcourt,
          Nigeria 🇳🇬
        </h2>
      </div>
    </div>
  );
};

export default ScrollingBanner;
