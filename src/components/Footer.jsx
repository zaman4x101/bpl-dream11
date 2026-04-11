import { useState } from "react";
import logoFooter from "../assets/logo-footer.png";

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");

  const handleSubscribe = () => {
    if (footerEmail.trim()) {
      alert(`Subscribed with ${footerEmail}!`);
      setFooterEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo-wrap">
          <img src={logoFooter} alt="Cricket" className="footer-logo" />
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading">About Us</h4>
            <p className="footer-text">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Subscribe</h4>
            <p className="footer-subscribe-text">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="footer-subscribe">
              <input
                type="email"
                className="footer-input"
                placeholder="Enter your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className="btn-footer-subscribe" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
}
