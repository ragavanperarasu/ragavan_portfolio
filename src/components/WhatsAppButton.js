import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "./Home/pricingData";

// Always-visible contact shortcut — most enquiries arrive this way.
function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
