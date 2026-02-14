'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Crown, Download, Share, ArrowLeft, ShoppingCart, CheckCircle, Sparkles, Printer, Monitor } from 'lucide-react'

export default function ResultPage() {
  const [selectedOption, setSelectedOption] = useState('digital')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)

  const pricingOptions = {
    digital: {
      title: 'Digital Download',
      price: 19.99,
      description: 'High-resolution 2048x2048 digital file',
      features: [
        'Instant download after purchase',
        'High-resolution 2048x2048',  
        'Perfect for social media & web',
        'Print at home on any size',
        'Commercial usage rights',
        'Lifetime access'
      ],
      icon: Monitor
    },
    poster: {
      title: 'Premium Poster',
      price: 39.99,
      description: 'Professional poster print + digital file',
      features: [
        'Everything in Digital Download',
        'Professional poster print (24" x 24")',
        'Museum-quality paper',
        'Free worldwide shipping',
        'Protective tube packaging',
        'Ready to frame'
      ],
      icon: Printer
    },
    canvas: {
      title: 'Canvas Masterpiece',
      price: 79.99,
      description: 'Gallery-wrapped canvas + digital file',
      features: [
        'Everything in Digital Download',
        'Gallery-wrapped canvas (24" x 24")',
        'Museum-quality canvas material',
        'Ready to hang (no frame needed)',
        'Free worldwide shipping',
        'Premium protective packaging'
      ],
      icon: Crown
    }
  }

  const handlePurchase = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsPurchased(true)
    }, 3000)
  }

  const handleDownload = () => {
    // In production, this would download the actual high-res image
    alert('High-resolution portrait downloaded! 👑')
  }

  const currentOption = pricingOptions[selectedOption as keyof typeof pricingOptions]

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-glass rounded-2xl px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-gold-light" />
                <span className="text-2xl font-serif font-bold text-gold-light">Portrait Royale</span>
              </Link>
              <Link href="/upload" className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Upload</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-shadow">
            Your
            <span className="block text-transparent bg-clip-text bg-gold mt-2">
              Royal Portrait
            </span>
            is Ready!
          </h1>
          <p className="text-xl text-gray-300">
            Behold your transformation into Renaissance royalty! ✨
          </p>
        </div>

        {!isPurchased ? (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Portrait Preview */}
            <div>
              <div className="bg-card-dark rounded-3xl p-8">
                <h2 className="text-2xl font-serif font-semibold text-gold-light mb-8 flex items-center">
                  <Crown className="h-6 w-6 mr-3" />
                  Your Renaissance Portrait
                </h2>
                
                {/* Generated Portrait Display */}
                <div className="relative rounded-3xl overflow-hidden mb-8">
                  <div className="aspect-square bg-gradient-to-br from-amber-900/40 via-red-900/40 to-amber-800/40 flex items-center justify-center border border-gold/20">
                    {/* In production, this would show the actual AI-generated image */}
                    <div className="text-center text-gold">
                      <Crown className="h-32 w-32 mx-auto mb-8" />
                      <h3 className="text-3xl font-serif font-bold mb-4">Renaissance Royal Portrait</h3>
                      <p className="text-xl text-gray-300">Your Majestic Transformation</p>
                      <div className="mt-8 px-6 py-3 bg-black/40 rounded-full text-sm border border-gold/30">
                        Preview Quality
                      </div>
                    </div>
                  </div>
                  
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="bg-gold/20 rounded-full p-6 mb-6 inline-block border border-gold/40">
                        <ShoppingCart className="h-10 w-10 text-gold-light" />
                      </div>
                      <p className="text-xl font-serif font-semibold">Choose your option to unlock</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-semibold text-lg">Generated successfully!</span>
                  </div>
                  <p className="text-gray-300">
                    Your royal portrait is ready. Choose your preferred option below.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Options */}
            <div>
              <div className="bg-card-dark rounded-3xl p-8">
                <h2 className="text-2xl font-serif font-semibold text-gold-light mb-8 text-center">
                  Choose Your Royal Experience
                </h2>
                
                {/* Option Selector */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                  {Object.entries(pricingOptions).map(([key, option]) => {
                    const Icon = option.icon
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedOption(key)}
                        className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                          selectedOption === key 
                            ? 'bg-gold text-black shadow-2xl' 
                            : 'bg-gray-dark border border-gold/30 text-gold hover:border-gold-light'
                        }`}
                      >
                        <Icon className="h-8 w-8 mx-auto mb-3" />
                        <div className="font-semibold">{option.title}</div>
                        <div className="text-sm opacity-75">${option.price}</div>
                      </button>
                    )
                  })}
                </div>

                {/* Selected Option Details */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-bold text-gold-light mb-3">{currentOption.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{currentOption.description}</p>
                  <div className="text-5xl font-serif font-bold text-gold mb-8">${currentOption.price}</div>
                  
                  <div className="bg-gray-dark/50 rounded-2xl p-8 mb-8 border border-gold/20">
                    <h4 className="text-xl font-serif font-semibold text-gold-light mb-6">What's Included:</h4>
                    <ul className="text-left space-y-4">
                      {currentOption.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-4 mt-1 flex-shrink-0" />
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={isProcessing}
                    className="w-full inline-flex items-center justify-center space-x-3 bg-gold text-black px-8 py-5 rounded-full font-semibold text-xl hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                        <span>Processing Payment...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-6 w-6" />
                        <span>Purchase {currentOption.title}</span>
                      </>
                    )}
                  </button>

                  <div className="mt-6 text-gray-400 space-y-2 text-lg">
                    <p>🔒 Secure payment powered by Stripe</p>
                    <p>✅ Instant access after purchase</p>
                    <p>🛡️ 30-day satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="max-w-5xl mx-auto">
            <div className="bg-card-dark border border-green-400/30 rounded-3xl p-12 text-center">
              <CheckCircle className="h-32 w-32 text-green-400 mx-auto mb-10" />
              <h2 className="text-5xl font-serif font-bold text-gold-light mb-6">
                🎉 Purchase Complete!
              </h2>
              <p className="text-2xl text-gray-300 mb-12">
                Your {currentOption.title} is ready! Check your email for details and download links.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-dark/50 rounded-2xl p-8 border border-gold/20">
                  <h3 className="text-xl font-serif font-semibold text-gold-light mb-4">📧 Email Sent</h3>
                  <p className="text-gray-300 text-lg">
                    Download links and order details sent to your email address.
                  </p>
                </div>
                <div className="bg-gray-dark/50 rounded-2xl p-8 border border-gold/20">
                  <h3 className="text-xl font-serif font-semibold text-gold-light mb-4">📦 Processing</h3>
                  <p className="text-gray-300 text-lg">
                    {selectedOption === 'digital' 
                      ? 'Your digital download is ready immediately!'
                      : 'Physical items will ship within 3-5 business days.'
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <button
                  onClick={handleDownload}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-3 bg-gold text-black px-10 py-5 rounded-full font-semibold text-xl hover:bg-gold-light transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <Download className="h-6 w-6" />
                  <span>Download High Resolution</span>
                </button>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/upload"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-semibold"
                  >
                    <Crown className="h-5 w-5" />
                    <span>Create Another Portrait</span>
                  </Link>
                  
                  <button className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-semibold">
                    <Share className="h-5 w-5" />
                    <span>Share Your Portrait</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Satisfaction Guarantee */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-card-dark rounded-3xl p-10">
            <h3 className="text-2xl font-serif font-semibold text-gold-light mb-6">
              👑 Royal Satisfaction Guarantee
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Not completely satisfied with your royal portrait? Get a full refund within 30 days, 
              no questions asked. We stand behind the quality of our Renaissance transformations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}