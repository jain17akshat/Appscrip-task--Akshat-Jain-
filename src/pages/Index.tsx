import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ChevronDown, ChevronRight, ChevronLeft, Check } from "lucide-react";

// Product images
import productBackpackLeather from "@/assets/product-backpack-leather.jpg";
import productDuckToy from "@/assets/product-duck-toy.jpg";
import productLeatherBelt from "@/assets/product-leather-belt.jpg";
import productWhiteSneakers from "@/assets/product-white-sneakers.jpg";
import productBrownShoes from "@/assets/product-brown-shoes.jpg";
import productStorageBag from "@/assets/product-storage-bag.jpg";
import productCosmeticPouch from "@/assets/product-cosmetic-pouch.jpg";
import productMessengerBag from "@/assets/product-messenger-bag.jpg";

const products = [
  {
    id: "1",
    name: "Premium Leather Backpack",
    category: "Bags & Backpacks",
    image: productBackpackLeather,
    price: "$129.99"
  },
  {
    id: "2",
    name: "Classic Rubber Duck Toy",
    category: "Toys & Accessories",
    image: productDuckToy,
    price: "$9.99"
  },
  {
    id: "3",
    name: "Genuine Leather Belt",
    category: "Accessories",
    image: productLeatherBelt,
    price: "$49.99"
  },
  {
    id: "4",
    name: "White Canvas Sneakers",
    category: "Footwear",
    image: productWhiteSneakers,
    price: "$79.99"
  },
  {
    id: "5",
    name: "Brown Leather Oxford Shoes",
    category: "Footwear",
    image: productBrownShoes,
    price: "$159.99"
  },
  {
    id: "6",
    name: "Striped Storage Bag",
    category: "Storage & Organization",
    image: productStorageBag,
    price: "$24.99"
  },
  {
    id: "7",
    name: "Blue Striped Cosmetic Pouch",
    category: "Beauty & Personal Care",
    image: productCosmeticPouch,
    price: "$19.99"
  },
  {
    id: "8",
    name: "Tan Leather Messenger Bag",
    category: "Bags & Backpacks",
    image: productMessengerBag,
    price: "$139.99"
  }
];

const Index = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: [] as string[],
  });

  const sortOptions = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "price-high", label: "PRICE : HIGH TO LOW" },
    { value: "price-low", label: "PRICE : LOW TO HIGH" },
  ];

  const getSortedProducts = () => {
    let sorted = [...products];
    
    switch (sortBy) {
      case "newest":
        return sorted.reverse();
      case "popular":
        return sorted;
      case "price-high":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price?.replace('$', '') || '0');
          const priceB = parseFloat(b.price?.replace('$', '') || '0');
          return priceB - priceA;
        });
      case "price-low":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price?.replace('$', '') || '0');
          const priceB = parseFloat(b.price?.replace('$', '') || '0');
          return priceA - priceB;
        });
      default:
        return sorted;
    }
  };

  const displayedProducts = getSortedProducts();
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || "RECOMMENDED";
  
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": `High-quality ${product.name.toLowerCase()} from our ${product.category} collection`,
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "price": product.price?.replace('$', ''),
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-background py-20 px-4 border-b border-border" aria-labelledby="hero-heading">
            <div className="container mx-auto text-center max-w-4xl">
              <h1 
                id="hero-heading"
                className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-wide"
              >
                DISCOVER OUR PRODUCTS
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
              </p>
            </div>
          </section>

          {/* Filter Bar */}
          <div className="border-b border-border">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-foreground">{displayedProducts.length} ITEMS</span>
                  <button 
                    onClick={() => setShowFilter(!showFilter)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showFilter ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    <span className="uppercase underline underline-offset-4">
                      {showFilter ? 'Hide Filter' : 'Show Filter'}
                    </span>
                  </button>
                </div>
                
                <div className="relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <span className="uppercase">{currentSortLabel}</span>
                    <ChevronDown size={16} />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowDropdown(false);
                          }}
                          className="flex items-center justify-between w-full px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors cursor-pointer"
                        >
                          <span>{option.label}</span>
                          {sortBy === option.value && <Check size={16} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="container mx-auto px-4 py-12" aria-labelledby="products-heading">
            <div className="flex gap-8">
              {/* Filter Sidebar */}
              {showFilter && (
                <FilterSidebar
                  onClose={() => setShowFilter(false)}
                  filters={filters}
                  onFilterChange={setFilters}
                />
              )}

              {/* Products Grid */}
              <div className="flex-1">
                <h2 id="products-heading" className="sr-only">
                  Product Collection
                </h2>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      image={product.image}
                      price={product.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
