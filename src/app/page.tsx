import Link from 'next/link'
import { Upload, Crown, Sparkles, Download, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-glass rounded-2xl px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-gold-light" />
                <span className="text-2xl font-serif font-bold text-gold-light">Portrait Royale</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="#gallery" className="text-white hover:text-gold transition-colors duration-300 font-medium">Gallery</Link>
                <Link href="#how" className="text-white hover:text-gold transition-colors duration-300 font-medium">How It Works</Link>
                <Link href="#reviews" className="text-white hover:text-gold transition-colors duration-300 font-medium">Reviews</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow">
            Transform Into
            <span className="block text-transparent bg-clip-text bg-gold mt-2">
              Renaissance Royalty
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Turn your beloved pets and family photos into stunning Renaissance masterpieces 
            using cutting-edge AI technology. Fit for kings, queens, and their faithful companions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/upload"
              className="inline-flex items-center space-x-3 bg-gold text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-gold-light transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Upload className="h-5 w-5" />
              <span>Create Your Portrait</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Free Preview Notice */}
          <div className="text-center mb-16">
            <p className="text-lg text-gold-light font-medium">
              Free Preview · No credit card or registration required
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="flex text-gold-light">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 2,847 customers</span>
            </div>
            <div className="text-sm font-medium">
              <Sparkles className="h-4 w-4 inline mr-2 text-gold-light" />
              Ready in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6">
            <button className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-gold-light transition-all duration-300 transform hover:scale-105">
              🐕 Pets
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105">
              👤 Humans  
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gold-light">
            Royal Transformations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pet Gallery Examples */}
            <div className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden bg-card-dark aspect-square hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gold">
                    <Crown className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-xl font-serif font-semibold">Majestic Spitz</p>
                    <p className="text-sm text-gray-400 mt-2">Renaissance Noble</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-semibold text-gold-light">Royal Transformation</p>
                    <p className="text-sm text-gray-300">See the magic ✨</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden bg-card-dark aspect-square hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gold">
                    <Crown className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-xl font-serif font-semibold">Royal Persian</p>
                    <p className="text-sm text-gray-400 mt-2">Medieval Royalty</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-semibold text-gold-light">Elegant Portrait</p>
                    <p className="text-sm text-gray-300">Timeless beauty ✨</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden bg-card-dark aspect-square hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gold">
                    <Crown className="h-20 w-20 mx-auto mb-4" />
                    <p className="text-xl font-serif font-semibold">Noble Stallion</p>
                    <p className="text-sm text-gray-400 mt-2">Baroque Majesty</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-semibold text-gold-light">Majestic Power</p>
                    <p className="text-sm text-gray-300">Royal strength ✨</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/upload"
              className="inline-flex items-center space-x-3 bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Sparkles className="h-5 w-5" />
              <span>Transform Your Photo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gold-light">
            3 Simple Steps to Royalty
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold-light mb-4">1. Upload Your Photo</h3>
              <p className="text-gray-300 leading-relaxed">
                Simply upload a clear photo of your pet or yourself. 
                Our AI works best with well-lit, front-facing photos.
              </p>
            </div>
            
            <div className="text-center bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold-light mb-4">2. AI Creates Magic</h3>
              <p className="text-gray-300 leading-relaxed">
                Our advanced AI transforms your photo into a stunning Renaissance royal portrait, 
                complete with regal clothing and artistic mastery.
              </p>
            </div>
            
            <div className="text-center bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gold-light mb-4">3. Choose Your Format</h3>
              <p className="text-gray-300 leading-relaxed">
                Download your royal portrait digitally or order premium prints 
                on canvas or poster. Perfect for gifts or wall art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gold-light">
            Royal Reviews
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex text-gold-light mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "My Golden Retriever looks absolutely majestic! The Renaissance style is incredible - 
                it's hanging in my living room and everyone asks about it."
              </p>
              <p className="text-gold font-semibold">- Sarah M.</p>
            </div>

            <div className="bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex text-gold-light mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Perfect gift for my wife! Our cat transformed into royal nobility - 
                the quality is museum-worthy and arrived so quickly."
              </p>
              <p className="text-gold font-semibold">- Michael R.</p>
            </div>

            <div className="bg-card-dark rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex text-gold-light mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "I ordered portraits for my whole family! The Renaissance transformation 
                is stunning - we look like actual royalty from centuries ago."
              </p>
              <p className="text-gold font-semibold">- Jennifer K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gold-light">
            Ready to Become Royalty?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of satisfied customers who've transformed into Renaissance nobility
          </p>
          
          <Link 
            href="/upload"
            className="inline-flex items-center space-x-3 bg-gold text-black px-12 py-6 rounded-full font-semibold text-xl hover:bg-gold-light transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <Crown className="h-6 w-6" />
            <span>Create Your Royal Portrait</span>
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="text-gray-400 mt-8 text-lg">
            ✨ Ready in minutes • 🆓 Free preview first • 🛡️ Satisfaction guaranteed • 👑 Museum-quality results
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-16 bg-card-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Crown className="h-8 w-8 text-gold-light" />
            <span className="text-2xl font-serif font-bold text-gold-light">Portrait Royale</span>
          </div>
          <p className="text-gray-400 mb-2">&copy; 2026 Portrait Royale. All rights reserved.</p>
          <p className="text-gray-500">Transform your moments into masterpieces.</p>
        </div>
      </footer>
    </div>
  )
}