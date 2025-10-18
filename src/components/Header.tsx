import { Heart, ShoppingCart, Search, User, Menu, Package } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { wishlist, cart } = useWishlist();

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and icons */}
        <div className="flex items-center justify-between py-4">
          {/* Left: Logo icon */}
          <a href="/" className="flex items-center" aria-label="Home">
            <Package size={32} className="text-foreground" />
          </a>

          {/* Center: LOGO text */}
          <a href="/" className="text-2xl font-bold text-foreground tracking-wider" aria-label="Home">
            LOGO
          </a>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button 
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a 
              href="/wishlist"
              className="text-foreground hover:text-foreground/70 transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </a>
            <a 
              href="/cart"
              className="text-foreground hover:text-foreground/70 transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>
            <button 
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="User account"
            >
              <User size={20} />
            </button>
            <button className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
              ENG
            </button>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="border-t border-border" aria-label="Main navigation">
          <ul className="flex items-center justify-center gap-12 py-4">
            <li><a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">SHOP</a></li>
            <li><a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">SKILLS</a></li>
            <li><a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">STORIES</a></li>
            <li><a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">ABOUT</a></li>
            <li><a href="#" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
