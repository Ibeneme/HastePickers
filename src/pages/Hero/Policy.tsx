import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = (type: any) => {
    if (type === "privacy") {
      navigate("/privacy-policy"); // Navigate to privacy policy route
    } else if (type === "terms") {
      navigate("/terms-of-use"); // Navigate to privacy policy route
    } else if (type === "faqs") {
      navigate("/faqs"); // Navigate to privacy policy route
    }
  };

  return (
    <div
      style={{
        paddingTop: "120px",
        maxWidth: "100%",
        margin: "0 auto",
        backgroundColor: "#030C21",
        color: "#fff",
        paddingBottom: 120,
      }}
    >
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#030C21",
          color: "#fff",
          lineHeight: 2.4,
        }}
      >
        <Footer />
        <h1>Haste Pickers Privacy Policy</h1>
        <p>
          <strong>Effective Date: September 25th, 2024</strong>
        </p>
        <p>
          This Privacy Policy explains how Haste Pickers ("we", "us", or "our")
          collects, uses, and shares your personal information when you use our
          mobile application ("App") for booking dispatch riders. Please read
          this Privacy Policy carefully to understand how we manage your
          information.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>A. Personal Information:</h3>
        <ul>
          <li>
            <strong>Registration Information:</strong> When you create an
            account to book a delivery bike, we collect your name, email
            address, phone number, and delivery address.
          </li>
          <li>
            <strong>Payment Information:</strong> To process your delivery
            payments, we collect your payment details through a secure
            third-party payment processor. We do not store your full payment
            details ourselves.
          </li>
          <li>
            <strong>Location Information:</strong> We collect your location data
            to match you with nearby riders and to provide accurate pickup and
            delivery services.
          </li>
        </ul>
        <h3>B. Non-Personal Information:</h3>
        <ul>
          <li>
            <strong>Usage Data:</strong> We collect data on how you interact
            with the App, such as booking history, frequently used routes, and
            app performance statistics.
          </li>
          <li>
            <strong>Device Information:</strong> Information about your device,
            such as model, operating system, and app version, is collected to
            ensure compatibility and performance improvements.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>To facilitate the booking of delivery bikes;</li>
          <li>To calculate estimated delivery times and costs;</li>
          <li>
            To enhance user experience by personalizing your interaction with
            the app;
          </li>
          <li>
            To communicate with you about delivery updates and promotions;
          </li>
          <li>To address customer support inquiries and issues;</li>
          <li>
            To improve the App's functionality and introduce new features;
          </li>
          <li>To comply with legal requirements and regulations.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We may share your information in the following scenarios:</p>
        <ul>
          <li>
            <strong>With Riders:</strong> We share your delivery details with
            the riders assigned to your booking to ensure efficient and timely
            delivery.
          </li>
          <li>
            <strong>Service Providers:</strong> We work with third-party
            providers for payment processing and technical support.
          </li>
          <li>
            <strong>Compliance with Laws:</strong> We may disclose your
            information to legal authorities if required by law or to protect
            our rights.
          </li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to support
          delivery operations and fulfill any legal obligations.
        </p>

        <h2>5. Your Choices</h2>
        <p>You can manage your information in the following ways:</p>
        <ul>
          <li>
            <strong>Update Your Profile:</strong> Edit your profile information
            to keep it accurate and up-to-date.
          </li>
          <li>
            <strong>Delete Account:</strong> You may delete your account through
            the app settings.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> If you no longer wish to use our
            services, you can withdraw your consent by deleting your account.
          </li>
        </ul>

        <h2>6. Children's Privacy</h2>
        <p>
          The App is not intended for users under the age of 18, and we do not
          knowingly collect information from minors.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may periodically update this Privacy Policy to reflect changes in
          our practices or services.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at support@hastepickers.com.
        </p>

        <div className="footer-a">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 120,
              gap: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <p
                className="privacy-policy"
                onClick={() => handlePrivacyPolicyClick("privacy")}
              >
                Privacy Policy
              </p>

              <p className="privacy-policy">||</p>
              <p
                className="privacy-policy"
                onClick={() => handlePrivacyPolicyClick("terms")}
              >
                Terms of Use
              </p>
              <p className="privacy-policy">||</p>
              <p
                className="privacy-policy"
                onClick={() => handlePrivacyPolicyClick("faqs")}
              >
                FAQs
              </p>
            </div>
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
          </div>

          <div
            className="contact-info"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                backgroundColor: "#ffffff21",
                padding: `12px 24px`,
                borderRadius: 24,
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={() => window.open("mailto:support@hastepickers.com")}
            >
              Say "Hi 👋" at support@hastepickers.com
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Haste Pickers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
