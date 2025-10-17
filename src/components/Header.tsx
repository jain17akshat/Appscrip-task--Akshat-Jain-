import { Heart, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";

export const Header = () => {
  const { wishlist, cart } = useWishlist();

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold text-foreground" aria-label="Home">
              LOGO
            </a>
            <ul className="hidden md:flex items-center space-x-6">
              <li><a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Shop</a></li>
              <li><a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="/wishlist"
              className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              <span>({wishlist.length})</span>
            </a>
            <button 
              className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={18} />
              <span>({cart.length})</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
