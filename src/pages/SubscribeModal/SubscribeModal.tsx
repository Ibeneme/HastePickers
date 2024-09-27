import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa"; // Loader spinner
import "./SubscribeModal.css";
import { FaCircleCheck } from "react-icons/fa6";

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [success, setSuccess] = useState(false); // State for successful submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulate a loading time
    setTimeout(() => {
      setLoading(false); // Stop loading
      setSuccess(true); // Show success message
    }, 700); // 60 seconds for loader
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="close-icon" onClick={onClose}>
        <AiOutlineClose size={16} />
      </div>
      <div
        className="modal-content slide-in"
        style={{ width: "fit-content", padding: 24 }}
      >
        {/* Close icon at the top */}

        {/* Loader spinner or form */}
        {loading ? (
          <div className="loader">
            <FaSpinner className="spinner" size={24} color="#0f6df9" />
            <p>Adding to waitlist...</p>
          </div>
        ) : success ? (
          <div className="success-message">
            <FaCircleCheck className="check-icon" size={40} />
            <h2 className="success-message-h2">
              Successfully added to waitlist!
            </h2>
            <p className="success-message-p"> Added to the waitlist</p>
          </div>
        ) : (
          <div style={{ backgroundColor: "#fff" }}>
            <h2 style={{ color: "#000" }}>Subscribe to our waiting list</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: 16,
                }}
              />
              <button
                type="submit"
                className="submit-btn"
                style={{ padding: `16px 24px`, borderRadius: "899px" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;
