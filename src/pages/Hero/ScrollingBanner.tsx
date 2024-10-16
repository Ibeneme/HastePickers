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
            fontSize: "1.2rem", // Use relative units for responsiveness
            textAlign: "center", // Center text within the div
            fontFamily: "var(--fontFamily)",
            padding: "0 1rem", // Add some padding for spacing
          }}
        >
          <h2
            style={{
              fontSize: "1rem", // Relative unit for better scaling
              margin: 0, 
              lineHeight: 1.6// Remove default margin
            }}
          >
            Our services are currently available exclusively in Port Harcourt, Nigeria 🇳🇬
          </h2>
        </div>
      </div>
    );
  };
  
  export default ScrollingBanner;