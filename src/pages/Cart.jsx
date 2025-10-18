
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useWishlist } from "@/App";
import { ShoppingCart, Trash2 } from "lucide-react";
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useWishlist();

  const total = cart.reduce((sum, product) => {
    const price = product.price ? parseFloat(product.price.replace('$', '')) : 0;
    return sum + price;
  }, 0);

  const handleCheckout = () => {
    const itemCount = cart.length;
    alert(`Order Placed Successfully! 🎉\n\nYour order of ${itemCount} item${itemCount > 1 ? 's' : ''} (Total: $${total.toFixed(2)}) has been placed. Thank you for shopping with us!`);

    // Clear all cart items after checkout
    cart.forEach(product => removeFromCart(product.id));
  };

  return (
    <div className="cart-page">
      <Header />

      <main className="cart-page__main">
        <div className="cart-page__container">
          <div className="cart-page__header">
            <ShoppingCart size={32} className="cart-page__icon" />
            <h1>Shopping Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="cart-page__empty">
              <ShoppingCart size={64} className="cart-page__empty-icon" />
              <h2>Your cart is empty</h2>
              <p>Add some products to get started!</p>
              <a href="/" className="cart-page__continue-btn">Continue Shopping</a>
            </div>
          ) : (
            <div className="cart-page__grid">
              <div className="cart-page__items">
                {cart.map(product => (
                  <article key={product.id} className="cart-page__item">
                    <div className="cart-page__image">
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </div>
                    <div className="cart-page__info">
                      <h3>{product.name}</h3>
                      <p>{product.category}</p>
                      {product.price && <p className="cart-page__price">{product.price}</p>}
                    </div>
                    <button onClick={() => removeFromCart(product.id)} className="cart-page__remove-btn">
                      <Trash2 size={16} />
                    </button>
                  </article>
                ))}
              </div>

              <div className="cart-page__summary">
                <h2>Order Summary</h2>
                <div className="cart-page__summary-details">
                  <div className="cart-page__summary-row">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="cart-page__summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="cart-page__summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={handleCheckout} className="cart-page__checkout-btn">
                  Proceed to Checkout
                </button>
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
