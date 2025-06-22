
import { useState } from 'react';
import { Heart, MessageCircle, Share2, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Stories = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const stories = [
    {
      id: 1,
      title: "How Growing Microgreens Helped Me Heal",
      author: "Priya Nair",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      excerpt: "After my anxiety diagnosis, I needed something grounding. Growing microgreens became my daily meditation...",
      story: `After my anxiety diagnosis last year, I felt lost and overwhelmed. My therapist suggested finding a grounding activity, something that could connect me to the present moment. That's when I discovered microgreens.

What started as a small tray of pea shoots on my kitchen windowsill became my daily sanctuary. Every morning, I'd check on my tiny plants, misting them gently and watching for new growth. There was something deeply calming about nurturing these little lives.

The routine became my anchor. Wake up, coffee, check the microgreens. The simple act of caring for something outside myself helped quiet the constant chatter in my mind. When I harvested my first batch after 10 days, I cried tears of joy. Not just because they tasted amazing in my morning salad, but because I had successfully grown something beautiful.

Six months later, I now have a small setup with rotating trays of different varieties. My kitchen is greener, my meals are more nutritious, and most importantly, my anxiety is more manageable. Friends often ask about my "microgreen therapy," and I always tell them: sometimes healing comes in the smallest packages.

The best part? I've started sharing extras with neighbors, creating little connections in my apartment building. Growing microgreens didn't just help me heal—it helped me grow a community.`,
      likes: 34,
      comments: 12,
      timestamp: "3 days ago"
    },
    {
      id: 2,
      title: "Microgreens in My Dorm Room",
      author: "Arjun Krishnan",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      excerpt: "Started with a ₹200 investment, now I'm the unofficial 'salad guy' of my hostel and making pocket money too...",
      story: `College life and healthy eating don't usually go together, especially in a hostel. Mess food was decent, but I was craving fresh greens that didn't cost a fortune at the local market.

My grandmother suggested microgreens after seeing a YouTube video. With just ₹200, I bought some pea and radish seeds and a couple of plastic containers. My roommate thought I was crazy when I set up this "mini farm" on our study table.

The first harvest was a revelation. Fresh, crunchy pea shoots that added life to my instant noodles and basic dal-rice meals. Word spread quickly in our hostel. Soon, friends were asking if they could buy some for their meals too.

What started as personal consumption became a small business. I now have 8 trays rotating on a weekly schedule, growing peas, sunflower, radish, and mustard microgreens. I make around ₹2000 extra per month, which covers my weekend meals out!

The best part is how it's changed my floor's eating habits. We've started a "fresh Friday" tradition where everyone brings ingredients and we make a huge salad with my microgreens. It's brought us closer together and made healthy eating fun.

My parents are amazed when they visit and see my setup. My engineering professors use me as an example of practical innovation. Who knew a small green project could make such a big impact on college life?`,
      likes: 67,
      comments: 23,
      timestamp: "1 week ago"
    },
    {
      id: 3,
      title: "Retired But Rooted",
      author: "Colonel (Retd.) Sharma",
      location: "Dehradun, Uttarakhand",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      excerpt: "At 62, I thought my gardening days were over due to back problems. Then I discovered microgreens...",
      story: `Retirement hit me harder than I expected. After 35 years in the Army, suddenly having no schedule, no mission, left me feeling purposeless. My back problems had also ended my beloved vegetable gardening hobby.

My daughter suggested microgreens after reading about them online. "Dad, you can grow these sitting down!" she said. I was skeptical—how could something so small be satisfying?

Boy, was I wrong. Setting up my first microgreen tray felt like planning a mission again. Research the varieties, source the best seeds, design the optimal setup. My military precision found a new outlet.

The speed amazed me. In the Army, we talked about "quick wins"—microgreens deliver results in just days. Watching those first pea shoots emerge felt like witnessing a miracle. No bending, no heavy lifting, just careful tending and patience.

Now, three months in, I have a whole spare room dedicated to my microgreen operation. I've tried 15 different varieties, keeping detailed logs of growth rates, yields, and taste notes. My neighbors think I'm running a scientific experiment!

The health benefits have been incredible. My doctor is impressed with my energy levels and improved digestion. My wife loves the fresh additions to our meals, and I've regained that sense of purpose I thought was lost.

I'm now mentoring other retirees in our colony, sharing my knowledge and extra harvests. Who says you can't teach an old soldier new tricks? Sometimes the smallest seeds yield the greatest victories.`,
      likes: 89,
      comments: 31,
      timestamp: "2 weeks ago"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-sage-600 mb-6 animate-fade-in">
            From Windowsills to Wonder Gardens
          </h1>
          <p className="text-lg text-cream-700 mb-8 leading-relaxed animate-fade-in">
            Real stories from growers around the world. Whether it's a small kitchen counter or a backyard farm, 
            these are tales of growth — both plant and personal.
          </p>
          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="inline-flex items-center px-6 py-3 bg-sage-400 text-white rounded-lg hover:bg-sage-500 transition-colors font-medium animate-fade-in"
          >
            <Camera className="mr-2 h-5 w-5" />
            Share Your Story
          </button>
        </div>
      </section>

      {/* Submit Form */}
      {showSubmitForm && (
        <section className="bg-white border-b border-cream-200 py-8 animate-fade-in">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sage-50 rounded-lg p-6">
              <h3 className="font-serif font-semibold text-xl text-sage-600 mb-4">Share Your Microgreen Journey</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-cream-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-700 mb-2">Story Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Give your story a catchy title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-700 mb-2">Your Story</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Tell us about your microgreen journey..."
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitForm(false)}
                    className="px-4 py-2 text-cream-600 hover:text-cream-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-sage-400 text-white rounded-lg hover:bg-sage-500 transition-colors"
                  >
                    Submit Story
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <article
                key={story.id}
                className="story-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 lg:h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-serif font-bold text-2xl text-sage-600 mb-2">
                          {story.title}
                        </h2>
                        <div className="text-sm text-cream-600">
                          <span className="font-medium">{story.author}</span> • {story.location} • {story.timestamp}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-cream-700 leading-relaxed">
                      {story.excerpt}
                    </p>
                    
                    <details className="group">
                      <summary className="cursor-pointer text-sage-500 hover:text-sage-600 font-medium">
                        Read full story →
                      </summary>
                      <div className="mt-4 text-cream-700 leading-relaxed whitespace-pre-line">
                        {story.story}
                      </div>
                    </details>
                    
                    <div className="flex items-center space-x-6 pt-4 border-t border-cream-200">
                      <button className="flex items-center space-x-2 text-cream-600 hover:text-sage-500 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{story.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-cream-600 hover:text-sage-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{story.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-cream-600 hover:text-sage-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Stories;
