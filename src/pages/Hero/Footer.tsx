import React from "react"; // Importing React
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Footer.css"; // Import your CSS file for styling
import { MdOutlineElectricBike } from "react-icons/md";

const Footer: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function for navigation

  // Function to handle navigation to home
  const navigateToHome = () => {
    navigate("/"); // Navigate to home (adjust the path if needed)
  };

  return (
    <div className="footer">
      <div className="footer-content" onClick={navigateToHome} style={{ cursor: "pointer" }}>
        {/* Left side with logo and header */}
        <div className="footer-left">
          <MdOutlineElectricBike size={24} style={{ marginRight: 8 }} />{" "}
          <h2 className="footer-header">Haste Pickers</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;