
import { Zap, Heart, Shield, Brain } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Nutrition = () => {
  const microgreens = [
    {
      name: "Broccoli Microgreens",
      emoji: "🥦",
      nutrients: ["Sulforaphane", "Vitamin C", "Vitamin K", "Folate"],
      benefits: ["Fights inflammation", "Supports heart health", "Cancer protection", "Liver detox"],
      comparison: "40x more sulforaphane than mature broccoli",
      color: "bg-green-100 border-green-200"
    },
    {
      name: "Sunflower Microgreens",
      emoji: "🌻",
      nutrients: ["Protein", "Healthy Fats", "Vitamin E", "Zinc"],
      benefits: ["Muscle repair", "Skin health", "Immune support", "Anti-aging"],
      comparison: "Higher protein than most leafy greens",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      name: "Radish Microgreens",
      emoji: "🌶️",
      nutrients: ["Vitamin C", "Folate", "Anthocyanins", "Fiber"],
      benefits: ["Boosts metabolism", "Aids digestion", "Anti-inflammatory", "Blood sugar control"],
      comparison: "6x more vitamin C than mature radish",
      color: "bg-red-100 border-red-200"
    },
    {
      name: "Pea Shoots",
      emoji: "🍃",
      nutrients: ["Vitamin A", "Vitamin C", "Folic Acid", "Iron"],
      benefits: ["Eye health", "Immune system", "Energy production", "Skin support"],
      comparison: "7x more vitamin C than blueberries",
      color: "bg-emerald-100 border-emerald-200"
    },
    {
      name: "Kale Microgreens",
      emoji: "🥬",
      nutrients: ["Beta-carotene", "Vitamin K", "Calcium", "Lutein"],
      benefits: ["Bone health", "Vision protection", "Heart support", "Anti-oxidant"],
      comparison: "More concentrated nutrients than baby kale",
      color: "bg-green-100 border-green-200"
    },
    {
      name: "Red Cabbage Microgreens",
      emoji: "🟣",
      nutrients: ["Anthocyanins", "Vitamin C", "Vitamin K", "Polyphenols"],
      benefits: ["Brain health", "Anti-aging", "Heart protection", "Immune boost"],
      comparison: "6x more vitamin C than mature cabbage",
      color: "bg-purple-100 border-purple-200"
    }
  ];

  const healthBenefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Energy & Vitality",
      description: "High concentration of B vitamins and iron support natural energy production and reduce fatigue."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Heart Health",
      description: "Antioxidants and potassium help maintain healthy blood pressure and cardiovascular function."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Immune Support",
      description: "Vitamin C and antioxidants strengthen your body's natural defense systems."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Brain Function",
      description: "Folate and omega-3s support cognitive function and mental clarity."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-sage-600 mb-6 animate-fade-in">
            Packed with Power
          </h1>
          <p className="text-lg text-cream-700 mb-8 leading-relaxed animate-fade-in">
            Microgreens aren't just pretty — they're dense in nutrients, antioxidants, and flavor. 
            Learn how each variety supports your body and discover the science behind these nutritional superstars.
          </p>
        </div>
      </section>

      {/* Key Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-sage-600 mb-4">
              Why Microgreens Are Nutritional Powerhouses
            </h2>
            <p className="text-cream-700 max-w-3xl mx-auto">
              Research shows microgreens can contain 4-40 times more nutrients than their mature counterparts. 
              Here's how they support your health:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="font-serif font-semibold text-lg text-sage-600">
                  {benefit.title}
                </h3>
                <p className="text-cream-700 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microgreens Guide */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-sage-600 mb-4">
              Meet Your Microgreen Superstars
            </h2>
            <p className="text-cream-700 max-w-2xl mx-auto">
              Each variety brings unique flavors and health benefits to your plate. 
              Discover which microgreens match your wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microgreens.map((green, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${green.color} hover-lift animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{green.emoji}</div>
                  <h3 className="font-serif font-bold text-xl text-sage-600">
                    {green.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sage-600 mb-2">Key Nutrients</h4>
                    <div className="flex flex-wrap gap-1">
                      {green.nutrients.map((nutrient, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-sage-100 text-sage-700 text-xs rounded-full"
                        >
                          {nutrient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-600 mb-2">Health Benefits</h4>
                    <ul className="text-sm text-cream-700 space-y-1">
                      {green.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-cream-200">
                    <p className="text-xs text-sage-600 font-medium">
                      💡 {green.comparison}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-sage-600 mb-4">
              The Science Behind the Nutrition
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sage-50 rounded-lg p-6">
                <h3 className="font-serif font-semibold text-xl text-sage-600 mb-3">
                  Research Highlights
                </h3>
                <ul className="space-y-3 text-cream-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    University of Maryland study found microgreens contain 4-40x more nutrients than mature vegetables
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Red cabbage microgreens showed 40x higher vitamin E levels than mature leaves
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cilantro microgreens contained 3x more beta-carotene than mature cilantro
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Just 25g of microgreens can meet daily vitamin requirements
                  </li>
                </ul>
              </div>

              <div className="bg-cream-100 rounded-lg p-6">
                <h3 className="font-serif font-semibold text-xl text-sage-600 mb-3">
                  How to Maximize Nutrition
                </h3>
                <ul className="space-y-2 text-cream-700">
                  <li>• Eat fresh - harvest just before consumption</li>
                  <li>• Store properly in refrigerator for up to a week</li>
                  <li>• Add to meals at the end to preserve nutrients</li>
                  <li>• Combine different varieties for complete nutrition</li>
                  <li>• Pair with healthy fats for better absorption</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=600&fit=crop"
                alt="Fresh microgreens nutrition"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nutrition;
