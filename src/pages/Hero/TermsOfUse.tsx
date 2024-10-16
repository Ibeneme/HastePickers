import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();

//   const handleTermsOfUseClick = () => {
//     navigate("/terms-of-use");
//   };

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
          lineHeight: "1.8",
        }}
      >
        <Footer />
        <h1 style={{ marginBottom: "16px" }}>Terms of Use</h1>
        <p>
          <strong>Effective Date: December 7, 2023</strong>
        </p>
        <p>
          These Terms of Use govern your access to and use of our delivery bike
          booking app ("App"). By using the App, you agree to be bound by these
          terms.
        </p>

        <h2 style={{ marginTop: "24px" }}>1. User Account</h2>
        <ul>
          <li>
            To use the App, you must create an account with accurate and
            complete information.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
        </ul>

        <h2 style={{ marginTop: "24px" }}>2. Booking and Payments</h2>
        <ul>
          <li>
            All bookings made through the App are subject to acceptance by us.
          </li>
          <li>
            Payments for deliveries are processed through a secure third-party
            payment provider.
          </li>
        </ul>

        <h2 style={{ marginTop: "24px" }}>3. Prohibited Activities</h2>
        <ul>
          <li>
            You agree not to misuse the App for any unlawful or unauthorized
            purposes.
          </li>
          <li>
            You must not interfere with the security or proper functioning of
            the App.
          </li>
        </ul>

        <h2 style={{ marginTop: "24px" }}>4. Limitation of Liability</h2>
        <p>
          We are not liable for any damages resulting from your use of the App
          or inability to access it.
        </p>

        <h2 style={{ marginTop: "24px" }}>5. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account for
          violating these terms or engaging in prohibited activities.
        </p>

        <h2 style={{ marginTop: "24px" }}>6. Changes to the Terms</h2>
        <p>
          We may update these Terms of Use from time to time, and the updated
          version will be posted on our website.
        </p>

        <h2 style={{ marginTop: "24px" }}>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at support@deliverybikeapp.com.
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
                href="https://www.facebook.com/deliverybikeapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://twitter.com/deliverybikeapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://www.instagram.com/deliverybikeapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                style={{ color: "#fff" }}
                href="https://www.tiktok.com/@deliverybikeapp"
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
              onClick={() => window.open("mailto:support@deliverybikeapp.com")}
            >
              Say "Hi 👋" at support@deliverybikeapp.com
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Delivery Bike App. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
