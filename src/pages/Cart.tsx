import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cart, removeFromCart } = useWishlist();
  const { toast } = useToast();

  const handleCheckout = () => {
    const itemCount = cart.length;
    const totalAmount = total.toFixed(2);
    
    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your order of ${itemCount} item${itemCount > 1 ? 's' : ''} (Total: $${totalAmount}) has been placed. Thank you for shopping with us!`,
    });
    
    // Clear all cart items after checkout
    cart.forEach(product => removeFromCart(product.id));
  };

  const total = cart.reduce((sum, product) => {
    const price = product.price ? parseFloat(product.price.replace('$', '')) : 0;
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-8">
            <ShoppingCart className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart size={64} className="mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some products to get started!</p>
              <Button asChild>
                <a href="/">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((product) => (
                  <article 
                    key={product.id}
                    className="bg-card border border-border rounded-lg p-4 flex gap-4"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.category}
                      </p>
                      {product.price && (
                        <p className="text-sm font-semibold text-foreground">
                          {product.price}
                        </p>
                      )}
                    </div>
                    <Button 
                      onClick={() => removeFromCart(product.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </article>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">Free</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-foreground">Total</span>
                        <span className="text-foreground">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
