import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";
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
              <Button asChild>
                <a href="/">Continue Shopping</a>
              </Button>
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
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="flex-1"
                        size="sm"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        onClick={() => removeFromWishlist(product.id)}
                        variant="outline"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </Button>
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
