
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ChevronDown, ChevronRight, ChevronLeft, Check } from "lucide-react";
import './Index.css';

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
  { id: "1", name: "Premium Leather Backpack", category: "Bags & Backpacks", image: productBackpackLeather, price: "$129.99" },
  { id: "2", name: "Classic Rubber Duck Toy", category: "Toys & Accessories", image: productDuckToy, price: "$9.99" },
  { id: "3", name: "Genuine Leather Belt", category: "Accessories", image: productLeatherBelt, price: "$49.99" },
  { id: "4", name: "White Canvas Sneakers", category: "Footwear", image: productWhiteSneakers, price: "$79.99" },
  { id: "5", name: "Brown Leather Oxford Shoes", category: "Footwear", image: productBrownShoes, price: "$159.99" },
  { id: "6", name: "Striped Storage Bag", category: "Storage & Organization", image: productStorageBag, price: "$24.99" },
  { id: "7", name: "Blue Striped Cosmetic Pouch", category: "Beauty & Personal Care", image: productCosmeticPouch, price: "$19.99" },
  { id: "8", name: "Tan Leather Messenger Bag", category: "Bags & Backpacks", image: productMessengerBag, price: "$139.99" }
];

const Index = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filters, setFilters] = useState({ customizable: false, idealFor: [] });

  const sortOptions = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "price-high", label: "PRICE : HIGH TO LOW" },
    { value: "price-low", label: "PRICE : LOW TO HIGH" }
  ];

  const getSortedProducts = () => {
    let sorted = [...products];
    switch (sortBy) {
      case "newest": return sorted.reverse();
      case "price-high": return sorted.sort((a,b)=>parseFloat(b.price.slice(1))-parseFloat(a.price.slice(1)));
      case "price-low": return sorted.sort((a,b)=>parseFloat(a.price.slice(1))-parseFloat(b.price.slice(1)));
      default: return sorted;
    }
  };

  const displayedProducts = getSortedProducts();
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || "RECOMMENDED";

  // JSON-LD structured data
  const structuredData = {
    "@context":"https://schema.org",
    "@type":"ItemList",
    "itemListElement": products.map((product,index)=>({
      "@type":"ListItem",
      "position": index+1,
      "item": {
        "@type":"Product",
        "name": product.name,
        "image": product.image,
        "description": `High-quality ${product.name.toLowerCase()} from ${product.category} collection`,
        "category": product.category,
        "offers": { "@type":"Offer", "price": product.price.slice(1), "priceCurrency":"USD" }
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="index-page">
        <Header />

        <main className="index-page__main">
          {/* Hero */}
          <section className="index-page__hero" aria-labelledby="hero-heading">
            <div className="index-page__hero-content">
              <h1 id="hero-heading">DISCOVER OUR PRODUCTS</h1>
              <p>
  Explore our curated collection of premium products crafted for quality, style, and everyday convenience. 
  Find the perfect item to elevate your lifestyle and discover something uniquely yours.
</p>

            </div>
          </section>

          {/* Filter / Sort Bar */}
          <div className="index-page__filterbar">
            <div className="index-page__filterbar-container">
              <div className="index-page__filter-left">
                <span>{displayedProducts.length} ITEMS</span>
                <button onClick={() => setShowFilter(!showFilter)}>
                  {showFilter ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>}
                  <span>{showFilter ? 'Hide Filter' : 'Show Filter'}</span>
                </button>
              </div>

              <div className="index-page__filter-right">
                <button onClick={()=>setShowDropdown(!showDropdown)}>
                  {currentSortLabel} <ChevronDown size={16}/>
                </button>
                {showDropdown && (
                  <div className="index-page__dropdown">
                    {sortOptions.map(opt => (
                      <button key={opt.value} onClick={()=>{setSortBy(opt.value); setShowDropdown(false);}}>
                        <span>{opt.label}</span>
                        {sortBy===opt.value && <Check size={16}/>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <section className="index-page__products" aria-labelledby="products-heading">
            <div className="index-page__products-container">
              {showFilter && <FilterSidebar filters={filters} onFilterChange={setFilters} onClose={()=>setShowFilter(false)}/>}
              <div className="index-page__grid">
                {displayedProducts.map(product => (
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
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
