import { Heart } from "lucide-react";
import { useWishlist } from "@/App";
import './ProductCard.css';

export const ProductCard = ({ id, name, image, category, price }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isInWishlist(id)) {
      removeFromWishlist(id); // remove if already in wishlist
    } else {
      addToWishlist({ id, name, image, category, price }); // add if not in wishlist
    }
  };

  return (
    <article 
      className="product-card" 
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="product-card__image-container">
        <img
          src={image}
          alt={`${name} - ${category}`}
          className="product-card__image"
          loading="lazy"
          itemProp="image"
        />
        <button
          onClick={handleWishlistToggle}
          className="product-card__wishlist-btn"
          aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isInWishlist(id)}
        >
          <Heart 
            size={18} 
            className={isInWishlist(id) ? "product-card__heart--active" : ""} 
          />
        </button>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name" itemProp="name">{name}</h3>
        <p className="product-card__category" itemProp="category">{category}</p>
        {price && <p className="product-card__price" itemProp="price">{price}</p>}
      </div>
    </article>
  );
};
