
import { Instagram, Linkedin } from "lucide-react";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Newsletter */}
          <div className="footer__newsletter">
            <h2 className="footer__title">Be The First To Know</h2>
            <p className="footer__text">Sign up for updates from mettä muse.</p>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="footer__input"
                aria-label="Email address"
              />
              <button type="submit" className="footer__btn" aria-label="Subscribe">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact & Currency */}
          <div className="footer__contact">
            <h3 className="footer__subtitle">Contact Us</h3>
            <p className="footer__text">+44 221 133 5360</p>
            <p className="footer__text mb-6">customercare@mettamuse.com</p>

            <h3 className="footer__subtitle">Currency</h3>
            <div className="footer__currency">
              <span className="footer__flag">🇺🇸</span>
              <span className="footer__currency-text">• USD</span>
            </div>
            <p className="footer__small-text">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          {/* Company Links */}
          <div className="footer__links">
            <h3 className="footer__company">mettä muse</h3>
            <ul className="footer__list">
              {['About Us','Stories','Artisans','Boutiques','Contact Us','EU Compliances Docs'].map(item => (
                <li key={item}><a href="#" className="footer__link">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h3 className="footer__subtitle">Quick Links</h3>
            <ul className="footer__list">
              {['Orders & Shipping','Join/Login as a Seller','Payment & Pricing','Return & Refunds','FAQs','Privacy Policy','Terms & Conditions'].map(item => (
                <li key={item}><a href="#" className="footer__link">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Social & Payment */}
          <div className="footer__social">
            <h3 className="footer__subtitle">Follow Us</h3>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>

            <h3 className="footer__subtitle">mettä muse ACCEPTS</h3>
            <div className="footer__payments">
              <div className="footer__payment">GPay</div>
              <div className="footer__payment footer__payment--multi">
                <div className="footer__dots">
                  <div className="footer__dot footer__dot--red"></div>
                  <div className="footer__dot footer__dot--orange"></div>
                </div>
              </div>
              <div className="footer__payment footer__payment--blue">Pay</div>
              <div className="footer__payment footer__payment--amex">AMEX</div>
              <div className="footer__payment"></div>
              <div className="footer__payment footer__payment--purple">Pay</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
