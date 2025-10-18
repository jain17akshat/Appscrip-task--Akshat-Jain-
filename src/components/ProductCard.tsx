import { Heart } from "lucide-react";
import { useWishlist } from "@/App";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  price?: string;
}

export const ProductCard = ({ id, name, image, category, price }: ProductCardProps) => {
  const { addToWishlist, isInWishlist } = useWishlist();
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist({ id, name, image, category, price });
  };

  return (
    <article 
      className="group cursor-pointer"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-foreground/20">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={image}
            alt={`${name} - ${category}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            itemProp="image"
          />
          <button
            onClick={handleAddToWishlist}
            className="absolute top-2 right-2 h-10 w-10 inline-flex items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart 
              size={18} 
              className={isInWishlist(id) ? "fill-primary text-primary" : ""} 
            />
          </button>
        </div>
        <div className="p-4">
          <h3 
            className="text-sm font-medium text-foreground mb-1" 
            itemProp="name"
          >
            {name}
          </h3>
          <p className="text-xs text-muted-foreground" itemProp="category">
            {category}
          </p>
          {price && (
            <p className="text-sm font-semibold text-foreground mt-2" itemProp="price">
              {price}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};
