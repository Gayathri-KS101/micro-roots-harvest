
import { useState } from 'react';
import { ShoppingCart, Star, Filter, Truck, Leaf, Gift } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTaste, setSelectedTaste] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fresh', name: 'Fresh Bundles' },
    { id: 'kits', name: 'DIY Kits' },
    { id: 'seeds', name: 'Seeds & Supplies' },
    { id: 'gifts', name: 'Gift Hampers' }
  ];

  const tasteFilters = [
    { id: 'all', name: 'All Tastes' },
    { id: 'mild', name: 'Mild' },
    { id: 'spicy', name: 'Spicy' },
    { id: 'crunchy', name: 'Crunchy' }
  ];

  const products = [
    {
      id: 1,
      name: "Weekly Fresh Bundle",
      category: "fresh",
      taste: "mild",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Mixed microgreens delivered fresh every week",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      nutrients: ["High in Vitamin C", "Rich in Antioxidants"],
      subscription: true
    },
    {
      id: 2,
      name: "Starter Growing Kit",
      category: "kits",
      taste: "mild",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      description: "Everything you need to start growing microgreens at home",
      rating: 4.9,
      reviews: 89,
      badge: "Complete Kit",
      nutrients: ["DIY Growing", "Educational"],
      subscription: false
    },
    {
      id: 3,
      name: "Spicy Mix Bundle",
      category: "fresh",
      taste: "spicy",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      description: "Radish, mustard, and arugula microgreens for heat lovers",
      rating: 4.7,
      reviews: 76,
      badge: "New",
      nutrients: ["Metabolism Boost", "Anti-inflammatory"],
      subscription: true
    },
    {
      id: 4,
      name: "Sunflower Microgreens",
      category: "fresh",
      taste: "crunchy",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Crunchy, protein-rich sunflower microgreens",
      rating: 4.6,
      reviews: 134,
      badge: "",
      nutrients: ["High Protein", "Healthy Fats"],
      subscription: true
    },
    {
      id: 5,
      name: "Premium Seed Collection",
      category: "seeds",
      taste: "all",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      description: "Organic seeds for 8 different microgreen varieties",
      rating: 4.8,
      reviews: 67,
      badge: "Organic",
      nutrients: ["Variety Pack", "Organic Certified"],
      subscription: false
    },
    {
      id: 6,
      name: "Wellness Gift Hamper",
      category: "gifts",
      taste: "mild",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Perfect gift with fresh microgreens, growing kit, and recipe book",
      rating: 4.9,
      reviews: 43,
      badge: "Gift Ready",
      nutrients: ["Complete Package", "Recipe Included"],
      subscription: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const tasteMatch = selectedTaste === 'all' || product.taste === selectedTaste;
    return categoryMatch && tasteMatch;
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-sage-600 mb-6 animate-fade-in">
            Bring the Farm to Your Fork
          </h1>
          <p className="text-lg text-cream-700 mb-8 leading-relaxed animate-fade-in">
            Fresh microgreens, DIY growing kits, and everything you need for a healthier lifestyle. 
            Grown with love in Kerala and delivered to your doorstep.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center space-x-2 text-sage-600 animate-fade-in">
              <Truck className="h-5 w-5" />
              <span className="font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sage-600 animate-fade-in">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">Organic Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sage-600 animate-fade-in">
              <Gift className="h-5 w-5" />
              <span className="font-medium">Recipe PDFs Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-cream-600" />
              <span className="font-medium text-cream-700">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-sage-400 text-white'
                      : 'bg-cream-100 text-cream-700 hover:bg-sage-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tasteFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedTaste(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTaste === filter.id
                      ? 'bg-sage-400 text-white'
                      : 'bg-cream-100 text-cream-700 hover:bg-sage-100'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-sage-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  )}
                  {product.subscription && (
                    <span className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Subscription
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-cream-700">{product.rating}</span>
                    <span className="text-sm text-cream-600">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-lg text-sage-600 mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-cream-700 text-sm mb-3">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.nutrients.map((nutrient, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-sage-100 text-sage-700 text-xs rounded-full"
                      >
                        {nutrient}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-xl text-sage-600">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-cream-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                      {product.subscription && (
                        <div className="text-xs text-cream-600">Weekly delivery</div>
                      )}
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-sage-400 text-white px-4 py-2 rounded-lg hover:bg-sage-500 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="font-medium">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4">
            Never Run Out of Fresh Greens
          </h2>
          <p className="text-sage-100 mb-8 text-lg">
            Subscribe to our weekly delivery and save 25% on all fresh bundles. 
            Skip or cancel anytime.
          </p>
          <button className="bg-white text-sage-600 px-8 py-3 rounded-lg font-semibold hover:bg-cream-50 transition-colors">
            Start Subscription
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Store;
