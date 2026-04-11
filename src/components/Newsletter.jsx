import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
        <p className="newsletter-sub">Get the latest updates and news right in your inbox!</p>
        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn-subscribe" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
