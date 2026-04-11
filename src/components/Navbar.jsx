import { useTeam } from "../context/TeamContext";
import logo from "../assets/logo.png";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const { coins } = useTeam();

  const formatCoins = (c) => {
    if (c >= 1000000) return (c / 1000000).toFixed(2) + "M";
    if (c >= 1000) return (c / 1000).toFixed(0) + "K";
    return c.toLocaleString();
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Cricket Logo" className="logo-img" />
        </div>
        
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
          </ul>
          
          <div className="coin-badge">
            <span className="coin-amount">{formatCoins(coins)} Coin</span>
            <span className="coin-icon">🪙</span>
          </div>
        </div>
      </div>
    </nav>
  );
}