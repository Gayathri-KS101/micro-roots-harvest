
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticlePopup from '../components/ArticlePopup';

const Home = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: '1',
      title: 'What Even Are Microgreens?',
      excerpt: 'Discover the tiny powerhouses that are revolutionizing modern nutrition.',
      content: `Microgreens are young vegetable greens that are harvested just after the cotyledon leaves have developed. These tiny plants pack a nutritional punch that's 4-40 times higher than their mature counterparts.

Unlike sprouts, which are harvested before true leaves develop, microgreens are allowed to grow for 7-14 days until their first true leaves appear. This gives them their distinct flavors and concentrated nutrients.

The most popular varieties include:
• Broccoli - rich in sulforaphane
• Pea shoots - high in vitamins A and C
• Radish - spicy and metabolic boosting
• Sunflower - protein-rich and nutty
• Arugula - peppery and antioxidant-rich

What makes microgreens special is their incredible nutrient density. Studies show they can contain up to 40 times more nutrients than mature plants. This means a small handful can provide significant amounts of vitamins, minerals, and antioxidants.

Growing them is surprisingly simple - you need just seeds, a growing medium, water, and light. No soil required! This makes them perfect for urban gardeners, apartment dwellers, and anyone wanting fresh, nutritious greens year-round.`,
      author: 'Dr. Sarah Green',
      readTime: '5 min read',
      image: '/assets/m1.jpeg'
    },
    {
      id: '2',
      title: '7 Easy Microgreens You Can Grow Indoors',
      excerpt: 'Start your microgreen journey with these beginner-friendly varieties.',
      content: `Starting your microgreen garden doesn't have to be overwhelming. These seven varieties are perfect for beginners and practically guarantee success.

1. **Pea Shoots** - The most forgiving variety. Sweet, crunchy, and fast-growing (7-10 days). Perfect for salads and stir-fries.

2. **Sunflower Microgreens** - Nutty flavor, high protein content. Takes 8-12 days and adds great texture to any dish.

3. **Radish Microgreens** - Spicy kick, beautiful purple stems. Ready in 5-7 days and great for adding heat to meals.

4. **Broccoli Microgreens** - Mild broccoli flavor, incredibly nutritious. 7-10 days to harvest, perfect for health-conscious eaters.

5. **Arugula Microgreens** - Peppery taste, grows quickly (7-9 days). Adds sophistication to any plate.

6. **Kale Microgreens** - Mild compared to mature kale, beautiful colors. 10-14 days and packed with nutrients.

7. **Cilantro Microgreens** - Fresh, bright flavor. Takes 10-14 days but worth the wait for herb lovers.

Growing tips:
• Use organic seeds for best results
• Maintain consistent moisture without overwatering
• Provide 12-16 hours of light daily
• Harvest when first true leaves appear
• Store harvested microgreens in the refrigerator for up to a week

Start with 2-3 varieties to avoid overwhelm, then expand your garden as you gain confidence!`,
      author: 'Growing Guru',
      readTime: '4 min read',
      image: '/assets/m2.jpeg'
    },
    {
      id: '3',
      title: 'Why Chefs and Nutritionists Swear by Them',
      excerpt: 'Learn why professionals in food and health are embracing microgreens.',
      content: `Professional chefs and nutritionists have embraced microgreens for reasons that go far beyond trends. These tiny greens represent a perfect marriage of flavor, nutrition, and visual appeal.

**From a Chef's Perspective:**
Microgreens offer intense, concentrated flavors that can transform dishes. A sprinkle of pea shoots adds sweetness, radish microgreens bring heat, and sunflower greens provide a nutty crunch. Their delicate textures and vibrant colors make plating beautiful and Instagram-worthy.

Top restaurants use microgreens as:
• Garnishes that add flavor, not just decoration
• Salad bases for unique textures
• Flavor enhancers in soups and sauces
• Protein complements in main dishes

**From a Nutritionist's Viewpoint:**
The nutrient density of microgreens is unmatched. Research from the University of Maryland found that microgreens contain 4-40 times more nutrients than their mature counterparts.

Key nutritional benefits:
• High concentrations of vitamins C, E, and K
• Rich in antioxidants like beta-carotene and lutein
• Good source of folate and other B vitamins
• Contains beneficial compounds like sulforaphane (broccoli microgreens)

**The Science Behind the Nutrition:**
During the microgreen stage, plants are using all their stored energy to grow rapidly. This concentrated energy translates to higher nutrient levels. The plant hasn't yet diluted these nutrients throughout a larger structure.

**Practical Applications:**
• Add to smoothies for nutrient boosts without strong flavors
• Use as salad bases to multiply nutritional value
• Incorporate into meal prep for week-long nutrition
• Perfect for those who struggle to eat enough vegetables

The combination of convenience, nutrition, and flavor makes microgreens a professional's secret weapon for both health and culinary excellence.`,
      author: 'Chef Maria Santos',
      readTime: '6 min read',
      image: '/assets/m3.jpeg'
    },
    {
      id: '4',
      title: 'Beginner Mistakes to Avoid',
      excerpt: 'Skip the common pitfalls and grow perfect microgreens from day one.',
      content: `Learning from others' mistakes can save you time, money, and frustration. Here are the most common microgreen growing mistakes and how to avoid them.

**1. Overwatering**
The #1 killer of microgreens. Signs include mold, wilting, and weak stems.
*Solution:* Mist lightly, maintain moisture without puddles. Use bottom watering when possible.

**2. Using Poor Quality Seeds**
Old or treated seeds lead to poor germination and weak plants.
*Solution:* Buy organic, untreated seeds from reputable suppliers. Store properly in cool, dry places.

**3. Insufficient Light**
Leggy, pale microgreens indicate light problems.
*Solution:* Provide 12-16 hours of bright light daily. LED grow lights work perfectly indoors.

**4. Wrong Harvesting Time**
Harvesting too early or late affects flavor and nutrition.
*Solution:* Harvest when first true leaves appear, usually 7-14 days depending on variety.

**5. Poor Air Circulation**
Stagnant air promotes mold and disease.
*Solution:* Use a small fan on low setting or ensure good ventilation in growing area.

**6. Wrong Growing Medium**
Some mediums hold too much water or don't provide proper support.
*Solution:* Use coconut coir, hemp mats, or quality potting mix. Avoid garden soil.

**7. Inconsistent Care**
Irregular watering and lighting stress plants.
*Solution:* Establish a routine. Check daily, water as needed, maintain consistent light schedule.

**8. Not Pre-soaking Seeds**
Some seeds benefit from pre-soaking for better germination.
*Solution:* Soak larger seeds (peas, sunflowers) for 4-8 hours before planting.

**Pro Tips for Success:**
• Start small with 2-3 varieties
• Keep detailed notes on what works
• Be patient - each variety has its own timeline
• Don't give up after first failures - everyone learns through experience

Remember: microgreen growing is forgiving. Even experienced growers occasionally face challenges. The key is learning from each batch and continuously improving your technique.`,
      author: 'Mike Thompson',
      readTime: '5 min read',
      image: '/assets/m4.jpeg'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-serif font-bold text-4xl lg:text-6xl text-sage-600 leading-tight text-shadow">
                Grow Goodness.
                <br />
                Eat Fresh.
                <br />
                <span className="text-sage-500">Live Green.</span>
              </h1>
              <p className="text-lg text-cream-700 leading-relaxed max-w-md">
                Discover the power of microgreens — tiny greens with mighty nutrition. 
                Learn, grow, and thrive with a community rooted in nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/stories"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sage-400 text-white rounded-lg hover:bg-sage-500 transition-colors font-medium"
                >
                  Meet the Growers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-sage-400 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-medium"
                >
                  Taste the Difference
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/assets/m1.jpeg"
                alt="Fresh microgreens with morning dew"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-600/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif font-bold text-3xl text-sage-600 mb-4">
              Learn & Grow
            </h2>
            <p className="text-cream-700 max-w-2xl mx-auto">
              Explore our collection of expert articles designed to help you succeed in your microgreen journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="article-card cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="h-32 overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-sage-600 mb-2">
                  {article.title}
                </h3>
                <p className="text-cream-700 text-sm mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-cream-600">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                <Sprout className="h-8 w-8 text-sage-500" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-sage-600">Fresh & Local</h3>
              <p className="text-cream-700">
                Grown fresh in Kerala, harvested at peak nutrition, and delivered to your doorstep.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-sage-500" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-sage-600">Nutrient Dense</h3>
              <p className="text-cream-700">
                Up to 40x more nutrients than mature vegetables in every tiny, flavorful bite.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-sage-500" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-sage-600">Community Driven</h3>
              <p className="text-cream-700">
                Join a growing community of health-conscious individuals and urban farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <ArticlePopup
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
};

export default Home;
