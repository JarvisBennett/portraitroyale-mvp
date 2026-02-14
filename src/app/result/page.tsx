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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-gold-400" />
            <span className="text-2xl font-bold text-white">Portrait Royale</span>
          </Link>
          <Link href="/upload" className="flex items-center space-x-2 text-white hover:text-gold-300">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Upload</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-300">
                {' '}Royal Portrait
              </span>
              {' '}is Ready!
            </h1>
            <p className="text-xl text-gray-300">
              Behold your transformation into Renaissance royalty! ✨
            </p>
          </div>

          {!isPurchased ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Portrait Preview */}
              <div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Crown className="h-6 w-6 mr-3 text-gold-400" />
                    Your Renaissance Portrait
                  </h2>
                  
                  {/* Generated Portrait Display */}
                  <div className="relative rounded-2xl overflow-hidden mb-6">
                    <div className="aspect-square bg-gradient-to-br from-amber-900 via-red-900 to-amber-800 flex items-center justify-center">
                      {/* In production, this would show the actual AI-generated image */}
                      <div className="text-center text-gold-400">
                        <Crown className="h-24 w-24 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Renaissance Royal Portrait</h3>
                        <p className="text-lg">Your Majestic Transformation</p>
                        <div className="mt-6 px-4 py-2 bg-black/30 rounded-full text-sm">
                          Preview Quality
                        </div>
                      </div>
                    </div>
                    
                    {/* Watermark overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                          <ShoppingCart className="h-8 w-8" />
                        </div>
                        <p className="text-lg font-semibold">Choose your option to unlock</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 text-green-400 mb-2">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">Generated successfully!</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Your royal portrait is ready. Choose your preferred option below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Options */}
              <div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                    Choose Your Royal Experience
                  </h2>
                  
                  {/* Option Selector */}
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {Object.entries(pricingOptions).map(([key, option]) => {
                      const Icon = option.icon
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedOption(key)}
                          className={`p-4 rounded-xl text-center transition-all duration-200 ${
                            selectedOption === key 
                              ? 'bg-gold-400 text-black' 
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          <Icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-semibold">{option.title}</div>
                          <div className="text-xs opacity-75">${option.price}</div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Selected Option Details */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentOption.title}</h3>
                    <p className="text-gray-300 mb-4">{currentOption.description}</p>
                    <div className="text-4xl font-bold text-gold-400 mb-6">${currentOption.price}</div>
                    
                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                      <ul className="text-left space-y-2">
                        {currentOption.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={handlePurchase}
                      disabled={isProcessing}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                          <span>Processing Payment...</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-5 w-5" />
                          <span>Purchase {currentOption.title}</span>
                        </>
                      )}
                    </button>

                    <div className="mt-4 text-sm text-gray-400 space-y-1">
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-green-400 rounded-2xl p-8 text-center">
                <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-8" />
                <h2 className="text-4xl font-bold text-white mb-4">
                  🎉 Purchase Complete!
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Your {currentOption.title} is ready! Check your email for details and download links.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">📧 Email Sent</h3>
                    <p className="text-gray-300 text-sm">
                      Download links and order details sent to your email address.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">📦 Processing</h3>
                    <p className="text-gray-300 text-sm">
                      {selectedOption === 'digital' 
                        ? 'Your digital download is ready immediately!'
                        : 'Physical items will ship within 3-5 business days.'
                      }
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleDownload}
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download High Resolution</span>
                  </button>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/upload"
                      className="inline-flex items-center justify-center space-x-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
                    >
                      <Crown className="h-4 w-4" />
                      <span>Create Another Portrait</span>
                    </Link>
                    
                    <button className="inline-flex items-center justify-center space-x-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200">
                      <Share className="h-4 w-4" />
                      <span>Share Your Portrait</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Satisfaction Guarantee */}
          <div className="mt-12 text-center">
            <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                👑 Royal Satisfaction Guarantee
              </h3>
              <p className="text-gray-300">
                Not completely satisfied with your royal portrait? Get a full refund within 30 days, 
                no questions asked. We stand behind the quality of our Renaissance transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}