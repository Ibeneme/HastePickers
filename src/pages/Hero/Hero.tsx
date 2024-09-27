import React, { useState } from "react";
import SubscribeModal from "../SubscribeModal/SubscribeModal";
import "./Hero.css";
import heroImage from "../../assets/frame.png";
import Footer from "./Footer";
import logo from "../../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setModalOpen(true);

  // Function to close the modal
  const closeModal = () => setModalOpen(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy"); // Navigate to privacy policy route
  };

  return (
    <section>
      <Footer />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
        }}
      >
        <img
          src={logo}
          alt="Haste Pickers Logo"
          className="logo"
          style={{
            backgroundColor: "#ffffff17",
            width: 130,
            height: 130,
            padding: 24,
            borderRadius: 32,
          }}
        />

        {/* Hero Title */}
        <h1 style={{ fontWeight: "bold", margin: "20px 0" }}>
          Fast & Reliable
          <br />
          Dispatch Rider Services
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: "15px", marginBottom: "30px", lineHeight: 1.7 }}>
          Deliver anything, anytime, anywhere with ease using Haste Pickers. We
          ensure your package gets to its destination safely and quickly.
        </p>
        <br />
        {/* Call to Action Button to open modal */}
        <button
          onClick={openModal}
          style={{
            padding: "15px 30px",
            backgroundColor: "#0F6DF9",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "899px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe to Our Waitlist
        </button>

        {/* Image */}
        <div style={{ marginTop: "50px" }}>
          <img
            src={heroImage}
            alt="Dispatch Rider"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>

        <div className="footer-a">
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 120,
              gap: 4,
            }}
          >
            <p className="privacy-policy" onClick={handlePrivacyPolicyClick}>
              Privacy Policy
            </p>
            {/* Right side with privacy policy and social icons */}
            <div
              className="social-icons"
              style={{ display: "flex", gap: "10px" }}
            >
              <a
                style={{ color: "#fff" }}
                href="https://www.facebook.com/hastepickers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://twitter.com/hastepickers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://www.instagram.com/hastepickers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://www.tiktok.com/@hastepickers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={20} />
              </a>
            </div>
            <br /> <br />
          </div>

          {/* Contact info and copyright */}
          <div className="contact-info">
            <p
              style={{
                backgroundColor: "#ffffff21",
                padding: `12px 24px`,
                borderRadius: 24,
                cursor: "pointer",
              }}
              onClick={() => window.open("mailto:hastepickers@gmail.com")}
            >
              Say "Hi 👋" at hastepickers@gmail.com
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Haste Pickers. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for subscribing to the waitlist */}
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
