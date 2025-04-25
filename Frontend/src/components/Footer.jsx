
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About BizFlow</h3>
          <p>
            BizFlow is India's leading B2B wholesale marketplace, connecting manufacturers, wholesalers, and retailers. We facilitate bulk trading with secure transactions and efficient delivery across the country.
          </p>
          <div className="certifications">
            <span><i className="fas fa-shield-alt"></i> Trusted Business</span>
            <span><i className="fas fa-award"></i> B2B Excellence Award</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Business Solutions</h3>
          <ul>
            <li><Link to="/sell">Start Selling</Link></li>
            <li><Link to="/wholesale">Wholesale Solutions</Link></li>
            <li><Link to="/manufacturer">Manufacturer Connect</Link></li>
            <li><Link to="/logistics">Logistics Services</Link></li>
            <li><Link to="/trade-assurance">Trade Assurance</Link></li>
            <li><Link to="/bulk-pricing">Bulk Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Trade Services</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-headset"></i>
              Business Support:<br />
              <span>24/7 Trade Assistance</span>
              <span>Bulk Order Support</span>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              Trade Enquiry:<br />
              <span>+91 1800 267 1122</span>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              Business Email:<br />
              <span>trade@bizflow.com</span>
              <span>support@bizflow.com</span>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Business Hub</h3>
          <div className="business-features">
            <Link to="/sourcing" className="feature-link">
              <i className="fas fa-search"></i>
              Sourcing Solutions
            </Link>
            <Link to="/verification" className="feature-link">
              <i className="fas fa-check-circle"></i>
              Seller Verification
            </Link>
            <Link to="/market-insights" className="feature-link">
              <i className="fas fa-chart-line"></i>
              Market Insights
            </Link>
          </div>
          <div className="business-hours">
            <h4>Trade Support Hours</h4>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/trade-terms">Trade Terms</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/disputes">Dispute Resolution</Link>
          <Link to="/seller-policy">Seller Policy</Link>
        </div>
        <p>&copy; 2025 BizFlow - India's Wholesale Trading Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

