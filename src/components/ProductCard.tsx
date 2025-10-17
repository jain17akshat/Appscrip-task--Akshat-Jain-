interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  price?: string;
}

export const ProductCard = ({ name, image, category, price }: ProductCardProps) => {
  return (
    <article 
      className="group cursor-pointer"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-foreground/20">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${name} - ${category}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            itemProp="image"
          />
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
