import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy"); // Navigate to privacy policy route
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
        }}
      >
        <Footer />
        <h1>Haste Pickers Privacy Policy</h1>
        <p>
          <strong>Effective Date: December 7, 2023</strong>
        </p>
        <p>
          This Privacy Policy describes how Haste Pickers ("we", "us", or "our")
          collects, uses, and shares your personal information when you use our
          mobile application ("App"). Please read this Privacy Policy carefully
          to understand how we handle your information.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>A. Personal Information:</h3>
        <ul>
          <li>
            <strong>Registration Information:</strong> When you register for an
            account on our App, we collect your name, email address, phone
            number, and username.
          </li>
          <li>
            <strong>Contact Information:</strong> We may collect your contact
            information, such as your address and phone number, if you provide
            it to us.
          </li>
          <li>
            <strong>Profile Information:</strong> You may choose to provide
            additional information about yourself, such as your interests,
            hobbies, and skills, to personalize your profile.
          </li>
          <li>
            <strong>Location Information:</strong> We may collect your location
            information when you use certain features of the App, such as the
            Split Buy feature.
          </li>
          <li>
            <strong>Payment Information:</strong> If you use the Split Buy or
            Split Share features, we may collect your payment information, such
            as your credit card number or bank details, through our secure
            third-party payment processor, Paystack. We do not store your full
            credit card information ourselves.
          </li>
        </ul>
        <h3>B. Non-Personal Information:</h3>
        <ul>
          <li>
            <strong>Usage Data:</strong> We collect information about how you
            interact with the App, such as the features you use, the pages you
            visit, and the time you spend on the App.
          </li>
          <li>
            <strong>Device Information:</strong> We collect information about
            the device you use to access the App, such as the device type,
            operating system, and IP address.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>To provide and operate the App;</li>
          <li>To process your requests and transactions;</li>
          <li>To personalize your experience on the App;</li>
          <li>To send you important information about the App and updates;</li>
          <li>To respond to your inquiries and requests for support;</li>
          <li>To improve the App and develop new features;</li>
          <li>To comply with applicable laws and regulations.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>
          We share your information with the following categories of third
          parties:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with service providers who help us operate the App, such as cloud
            storage providers and payment processors like Paystack.
          </li>
          <li>
            <strong>Business Partners:</strong> We may share your information
            with business partners with whom we offer joint services or
            promotions.
          </li>
          <li>
            <strong>Government Authorities:</strong> We may share your
            information with government authorities if required by law.
          </li>
        </ul>
        <p>
          We will not share your information with any other third parties
          without your consent.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          We will retain your information for as long as necessary to fulfill
          the purposes described in this Privacy Policy unless a longer
          retention period is required or permitted by law.
        </p>

        <h2>5. Your Choices</h2>
        <p>You have the following choices regarding your information:</p>
        <ul>
          <li>
            <strong>Access and Update Your Information:</strong> You can access
            and update your information through your account settings.
          </li>
          <li>
            <strong>Delete Your Account:</strong> You can delete your account at
            any time.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> You can withdraw your consent to
            our collection and use of your information by deleting your account.
          </li>
          <li>
            <strong>Limit Data Collection:</strong> You can limit the collection
            of location information by disabling location services on your
            device.
          </li>
          <li>
            <strong>Do Not Track:</strong> We do not track your online activity
            over time and across different websites or online services.
            Therefore, we do not respond to Do Not Track signals.
          </li>
        </ul>

        <h2>6. Children's Privacy</h2>
        <p>
          The App is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we
          learn that we have collected personal information from a child under
          13, we will delete that information as soon as possible.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the effective date above. We encourage you to review this
          Privacy Policy periodically for any changes.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at hastepickers@gmail.com.
        </p>

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
            <p className="privacy-policy" style={{textAlign:'center'}} onClick={handlePrivacyPolicyClick}>
              Privacy Policy
            </p>
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
          <div
            className="contact-info"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection:'column'
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
    </div>
  );
};

export default PrivacyPolicy;
