
import { Heart, ShoppingCart, Search, User, Package, Menu, X } from "lucide-react";
import { useState } from "react";
import { useWishlist } from "@/App";
import "./Header.css";

export const Header = () => {
  const { wishlist, cart } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header__container">
        {/* Top Bar */}
        <div className="header__top">
          {/* Left: Logo */}
          <a href="/" className="header__logo-icon" aria-label="Home">
            <Package size={32} />
          </a>

          {/* Center: Logo Text */}
          <a href="/" className="header__logo-text" aria-label="Home">
            LOGO
          </a>

          {/* Right: Icons */}
          <div className="header__icons">
            {/* Mobile Hamburger Menu */}
            <button
              className="header__hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button className="header__icon-btn" aria-label="Search">
              <Search size={20} />
            </button>

            <a href="/wishlist" className="header__icon-link" aria-label="Wishlist">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="header__badge">{wishlist.length}</span>
              )}
            </a>

            <a href="/cart" className="header__icon-link" aria-label="Shopping cart">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="header__badge">{cart.length}</span>
              )}
            </a>

            <button className="header__icon-btn" aria-label="User account">
              <User size={20} />
            </button>

            <button className="header__lang-btn">ENG</button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`header__nav ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            <li><a href="#" className="header__nav-link">SHOP</a></li>
            <li><a href="#" className="header__nav-link">SKILLS</a></li>
            <li><a href="#" className="header__nav-link">STORIES</a></li>
            <li><a href="#" className="header__nav-link">ABOUT</a></li>
            <li><a href="#" className="header__nav-link">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
