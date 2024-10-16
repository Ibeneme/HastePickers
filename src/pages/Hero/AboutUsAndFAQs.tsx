import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AboutUsAndFAQs: React.FC = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = (type: any) => {
    if (type === "privacy") {
      navigate("/privacy-policy"); // Navigate to privacy policy route
    } else if (type === "terms") {
      navigate("/terms-of-use"); // Navigate to terms of use route
    } else if (type === "faqs") {
      navigate("/faqs"); // Navigate to FAQs route
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

        {/* About Us Section */}
        <h1 style={{ marginBottom: "16px" }}>About Us</h1>
        <p>
          Welcome to Haste Pickers! We are dedicated to providing reliable and
          fast delivery services to meet your everyday needs. Our mission is to
          make your delivery experience seamless and efficient, ensuring your
          items reach their destination on time. Whether it's a small package or
          a larger shipment, we've got you covered with a network of
          professional and dependable bike riders.
        </p>
        <p>
          At Haste Pickers, customer satisfaction is at the heart of everything
          we do. We continually strive to innovate and enhance our services to
          better serve you. Thank you for choosing us as your trusted delivery
          partner.
        </p>
        <p>
          <strong>Note:</strong> We currently operate exclusively in the city of
          Port Harcourt, Rivers State, Nigeria{" "}
          <span role="img" aria-label="Nigerian Flag">
            🇳🇬
          </span>
          .
        </p>

        {/* FAQs Section */}
        <h1 style={{ marginBottom: "16px", marginTop: "40px" }}>FAQs</h1>

        <h2 style={{ marginTop: "24px" }}>1. How do I book a delivery?</h2>
        <p>
          To book a delivery, simply log in to your account, enter the pickup
          and delivery details, choose a preferred delivery time, and confirm
          the booking. You'll receive a confirmation message with the driver's
          details.
        </p>

        <h2 style={{ marginTop: "24px" }}>
          2. What should I do if I lose an item during delivery?
        </h2>
        <p>
          If you lose an item during delivery, please contact our support team
          immediately with the delivery details. We will do our best to locate
          your item and keep you informed of the progress.
        </p>

        <h2 style={{ marginTop: "24px" }}>
          3. How can I contact customer support?
        </h2>
        <p>
          You can reach our customer support by emailing us at
          support@hastepickers.com or by using the in-app chat feature available
          under the "Support" section in the app. We are available 24/7 to
          assist you.
        </p>

        <h2 style={{ marginTop: "24px" }}>
          4. Is there a way to track my delivery in real-time?
        </h2>
        <p>
          Yes, you can track your delivery in real-time through our app. Once
          your booking is confirmed, go to the "Track Delivery" section to see
          the current location of your package and the estimated delivery time.
        </p>

        <h2 style={{ marginTop: "24px" }}>
          5. Can I cancel my delivery after booking?
        </h2>
        <p>
          Yes, you can cancel your delivery as long as the driver hasn't picked
          up the package yet. Go to your "Bookings" section, select the delivery
          you want to cancel, and click on the "Cancel" button.
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
              © {new Date().getFullYear()} Haste Pickers. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAndFAQs;