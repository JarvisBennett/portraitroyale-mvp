import Link from 'next/link'
import { Upload, Crown, Sparkles, Download, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-gold-400" />
            <span className="text-2xl font-bold text-white">Portrait Royale</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#gallery" className="text-white hover:text-gold-300">Gallery</Link>
            <Link href="#how" className="text-white hover:text-gold-300">How It Works</Link>
            <Link href="#reviews" className="text-white hover:text-gold-300">Reviews</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-300">
              {' '}Renaissance Royalty
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Turn your beloved pets and family photos into stunning Renaissance masterpieces 
            using cutting-edge AI technology. Fit for kings, queens, and their faithful companions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/upload"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200"
            >
              <Upload className="h-5 w-5" />
              <span>Create Your Portrait</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">4.9/5 from 2,847 customers</span>
            </div>
            <div className="text-sm">
              <Sparkles className="h-4 w-4 inline mr-2" />
              Ready in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              🐕 Pets
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
              👤 Humans  
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Royal Transformations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Pet Gallery Examples */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900 via-red-900 to-amber-800 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gold-300">
                    <Crown className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Majestic Spitz</p>
                    <p className="text-sm opacity-75">Renaissance Noble</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Royal Transformation</p>
                    <p className="text-sm">See the magic ✨</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-purple-300">
                    <Crown className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Royal Persian</p>
                    <p className="text-sm opacity-75">Medieval Royalty</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Elegant Portrait</p>
                    <p className="text-sm">Timeless beauty ✨</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-900 via-teal-900 to-green-800 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-green-300">
                    <Crown className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Noble Stallion</p>
                    <p className="text-sm opacity-75">Baroque Majesty</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Majestic Power</p>
                    <p className="text-sm">Royal strength ✨</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/upload"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200"
            >
              <Sparkles className="h-5 w-5" />
              <span>Transform Your Photo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            3 Simple Steps to Royalty
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">1. Upload Your Photo</h3>
              <p className="text-gray-300">
                Simply upload a clear photo of your pet or yourself. 
                Our AI works best with well-lit, front-facing photos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">2. AI Creates Magic</h3>
              <p className="text-gray-300">
                Our advanced AI transforms your photo into a stunning Renaissance royal portrait, 
                complete with regal clothing and artistic mastery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">3. Choose Your Format</h3>
              <p className="text-gray-300">
                Download your royal portrait digitally or order premium prints 
                on canvas or poster. Perfect for gifts or wall art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Royal Reviews
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "My Golden Retriever looks absolutely majestic! The Renaissance style is incredible - 
                it's hanging in my living room and everyone asks about it."
              </p>
              <p className="text-gold-400 font-semibold">- Sarah M.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Perfect gift for my wife! Our cat transformed into royal nobility - 
                the quality is museum-worthy and arrived so quickly."
              </p>
              <p className="text-gold-400 font-semibold">- Michael R.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I ordered portraits for my whole family! The Renaissance transformation 
                is stunning - we look like actual royalty from centuries ago."
              </p>
              <p className="text-gold-400 font-semibold">- Jennifer K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become Royalty?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of satisfied customers who've transformed into Renaissance nobility
          </p>
          
          <Link 
            href="/upload"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-10 py-5 rounded-full font-semibold text-xl hover:from-gold-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200"
          >
            <Crown className="h-6 w-6" />
            <span>Create Your Royal Portrait</span>
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="text-gray-400 mt-6">
            ✨ Ready in minutes • 🛡️ Satisfaction guaranteed • 👑 Museum-quality results
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 bg-black/30">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-gold-400" />
            <span className="text-xl font-bold text-white">Portrait Royale</span>
          </div>
          <p>&copy; 2026 Portrait Royale. All rights reserved.</p>
          <p className="mt-2">Transform your moments into masterpieces.</p>
        </div>
      </footer>
    </div>
  )
}