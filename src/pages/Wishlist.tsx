import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useWishlist } from "@/App";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useWishlist();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-8">
            <Heart className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-16">
              <Heart size={64} className="mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Start adding products you love!</p>
              <a 
                href="/"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <article 
                  key={product.id}
                  className="bg-card border border-border rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    {product.price && (
                      <p className="text-sm font-semibold text-foreground mb-4">
                        {product.price}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => removeFromWishlist(product.id)}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
