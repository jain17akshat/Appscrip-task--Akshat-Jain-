export const Header = () => {
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
            <button 
              className="text-sm text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Search"
            >
              Search
            </button>
            <button 
              className="text-sm text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Shopping cart"
            >
              Cart (0)
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
