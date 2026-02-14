'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Upload, Crown, Image as ImageIcon, ArrowLeft, Sparkles, User, Heart } from 'lucide-react'

export default function UploadPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'pets' | 'humans'>('pets')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImage = e.target?.result as string
        setUploadedImages(prev => [...prev, newImage])
      }
      reader.readAsDataURL(file)
    }
  }

  const onButtonClick = () => {
    fileInputRef.current?.click()
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const generatePortrait = async () => {
    setIsGenerating(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false)
      // Redirect to result page
      window.location.href = '/result'
    }, 4000)
  }

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
              <Link href="/" className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-shadow">
            Create Your 
            <span className="block text-transparent bg-clip-text bg-gold mt-2">
              Royal Portrait
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Upload your photos and watch our AI transform them into Renaissance royalty
          </p>
          
          {/* Free Preview Notice */}
          <div className="text-center mb-8">
            <p className="text-lg text-gold-light font-medium">
              Free Preview · No credit card or registration required
            </p>
          </div>

          {/* Category Toggle */}
          <div className="flex justify-center space-x-6 mb-12">
            <button 
              onClick={() => setSelectedCategory('pets')}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'pets' 
                  ? 'bg-gold text-black shadow-2xl' 
                  : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
              }`}
            >
              <Heart className="h-5 w-5" />
              <span>🐕 Pets</span>
            </button>
            <button 
              onClick={() => setSelectedCategory('humans')}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'humans' 
                  ? 'bg-gold text-black shadow-2xl' 
                  : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
              }`}
            >
              <User className="h-5 w-5" />
              <span>👤 Humans</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-6 flex items-center">
              <Upload className="h-6 w-6 mr-3" />
              Upload Your {selectedCategory === 'pets' ? 'Pet' : 'Human'} Photos
            </h2>
            
            {uploadedImages.length === 0 ? (
              <div 
                className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-gold-light bg-gold/20 transform scale-105' 
                    : 'border-gold/50 hover:border-gold-light hover:bg-gold/10'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  multiple
                />
                
                <ImageIcon className="h-20 w-20 text-gold mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  Drop your photos here, or click to browse
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Supports JPG, PNG, WebP • Multiple photos supported • Up to 10MB each
                </p>
                
                <button
                  onClick={onButtonClick}
                  className="inline-flex items-center space-x-3 bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Photos</span>
                </button>

                <div className="mt-8 text-gray-400">
                  💡 Tip: Upload multiple photos for better results
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Uploaded Images Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative rounded-3xl overflow-hidden bg-card-dark p-3 hover:scale-105 transition-transform duration-300">
                      <img 
                        src={image} 
                        alt={`Uploaded photo ${index + 1}`} 
                        className="w-full h-40 object-cover rounded-2xl"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  
                  {/* Add More Photos Button */}
                  <div 
                    className="border-2 border-dashed border-gold/50 rounded-3xl p-6 flex flex-col items-center justify-center h-40 hover:border-gold-light hover:bg-gold/10 transition-all duration-300 cursor-pointer"
                    onClick={onButtonClick}
                  >
                    <Upload className="h-8 w-8 text-gold mb-3" />
                    <span className="text-gold font-medium">Add More</span>
                  </div>
                </div>
                
                <div className="bg-card-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gold-light mb-4 flex items-center">
                    <Crown className="h-6 w-6 mr-3" />
                    Renaissance Royal Style
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Transform your {selectedCategory === 'pets' ? 'beloved pet' : 'photos'} into nobility with Renaissance royal attire, 
                    complete with regal clothing, ornate furniture, and classical artistic styling.
                  </p>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 text-green-400 mb-6">
                      <Sparkles className="h-5 w-5" />
                      <span className="font-semibold text-lg">{uploadedImages.length} photo{uploadedImages.length > 1 ? 's' : ''} ready for transformation</span>
                    </div>
                    
                    <button
                      onClick={generatePortrait}
                      disabled={isGenerating || uploadedImages.length === 0}
                      className="w-full inline-flex items-center justify-center space-x-3 bg-gold text-black px-8 py-5 rounded-full font-semibold text-xl hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                          <span>Creating Royal Portrait...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-6 w-6" />
                          <span>Transform Into Royalty</span>
                        </>
                      )}
                    </button>

                    {isGenerating && (
                      <div className="mt-6">
                        <div className="text-gray-300 mb-3 text-lg">✨ AI is working its magic...</div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-gold h-3 rounded-full animate-pulse w-3/4"></div>
                        </div>
                        <div className="text-gray-400 mt-3">This usually takes 2-3 minutes</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tips & Preview */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-gold-light mb-8">
              📸 Photo Tips for Best Results
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="bg-card-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold text-gold mb-3 text-lg">✨ High Quality</h3>
                <p className="text-gray-300">Use clear, well-lit photos with good resolution (at least 512x512)</p>
              </div>
              
              <div className="bg-card-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold text-gold mb-3 text-lg">👤 Front-Facing</h3>
                <p className="text-gray-300">
                  {selectedCategory === 'pets' 
                    ? 'Pet should be clearly visible and facing toward camera'
                    : 'Face should be clearly visible and looking toward camera'
                  }
                </p>
              </div>
              
              <div className="bg-card-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold text-gold mb-3 text-lg">📷 Multiple Angles</h3>
                <p className="text-gray-300">Upload 2-3 photos from different angles for best AI understanding</p>
              </div>
              
              <div className="bg-card-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold text-gold mb-3 text-lg">🖼️ Single Subject</h3>
                <p className="text-gray-300">Best results with one {selectedCategory === 'pets' ? 'pet' : 'person'} per photo</p>
              </div>
            </div>

            {/* Sample Preview */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-gold-light mb-6">Preview: Renaissance Royal Style</h3>
              <div className="bg-card-dark rounded-3xl p-6">
                <div className="w-full h-64 bg-gradient-to-br from-amber-900/50 to-red-900/50 rounded-2xl flex items-center justify-center border border-gold/20">
                  <div className="text-center text-gold">
                    <Crown className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-serif font-semibold">
                      {selectedCategory === 'pets' ? 'Your Pet as Renaissance Nobility' : 'You as Renaissance Royalty'}
                    </p>
                    <p className="text-sm text-gray-300 mt-2">Your photo will be transformed here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Info */}
            <div className="mt-8 bg-card-dark border border-gold/30 rounded-2xl p-6">
              <h3 className="text-gold font-semibold mb-3 text-lg">⏱️ Processing Time</h3>
              <p className="text-gray-300">
                Your royal transformation typically takes 2-4 minutes. We'll show you a preview first, 
                then you can choose your preferred format and pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}