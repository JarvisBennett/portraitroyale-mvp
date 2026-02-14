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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-gold-400" />
            <span className="text-2xl font-bold text-white">Portrait Royale</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-gold-300">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Create Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-300">
                {' '}Royal Portrait
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Upload your photos and watch our AI transform them into Renaissance royalty
            </p>

            {/* Category Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setSelectedCategory('pets')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
                  selectedCategory === 'pets' 
                    ? 'bg-green-500 text-white' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                <Heart className="h-5 w-5" />
                <span>🐕 Pets</span>
              </button>
              <button 
                onClick={() => setSelectedCategory('humans')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
                  selectedCategory === 'humans' 
                    ? 'bg-green-500 text-white' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                <User className="h-5 w-5" />
                <span>👤 Humans</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Upload className="h-6 w-6 mr-3 text-gold-400" />
                Upload Your {selectedCategory === 'pets' ? 'Pet' : 'Human'} Photos
              </h2>
              
              {uploadedImages.length === 0 ? (
                <div 
                  className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-colors duration-200 ${
                    dragActive 
                      ? 'border-gold-400 bg-gold-400/10' 
                      : 'border-gray-400 hover:border-gold-400 hover:bg-white/5'
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
                  
                  <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Drop your photos here, or click to browse
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Supports JPG, PNG, WebP • Multiple photos supported • Up to 10MB each
                  </p>
                  
                  <button
                    onClick={onButtonClick}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:from-gold-500 hover:to-yellow-600 transition-all duration-200"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Choose Photos</span>
                  </button>

                  <div className="mt-6 text-sm text-gray-400">
                    💡 Tip: Upload multiple photos for better results
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Uploaded Images Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg p-2">
                        <img 
                          src={image} 
                          alt={`Uploaded photo ${index + 1}`} 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    
                    {/* Add More Photos Button */}
                    <div 
                      className="border-2 border-dashed border-gray-400 rounded-2xl p-4 flex flex-col items-center justify-center h-32 hover:border-gold-400 hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={onButtonClick}
                    >
                      <Upload className="h-6 w-6 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-300">Add More</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Crown className="h-5 w-5 mr-3 text-gold-400" />
                      Renaissance Royal Style
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Transform your {selectedCategory === 'pets' ? 'beloved pet' : 'photos'} into nobility with Renaissance royal attire, 
                      complete with regal clothing, ornate furniture, and classical artistic styling.
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
                        <Sparkles className="h-5 w-5" />
                        <span className="font-semibold">{uploadedImages.length} photo{uploadedImages.length > 1 ? 's' : ''} ready for transformation</span>
                      </div>
                      
                      <button
                        onClick={generatePortrait}
                        disabled={isGenerating || uploadedImages.length === 0}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-6 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
                      >
                        {isGenerating ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                            <span>Creating Royal Portrait...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-5 w-5" />
                            <span>Transform Into Royalty</span>
                          </>
                        )}
                      </button>

                      {isGenerating && (
                        <div className="mt-4 text-center">
                          <div className="text-sm text-gray-300 mb-2">✨ AI is working its magic...</div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-gold-400 to-yellow-500 h-2 rounded-full animate-pulse w-3/4"></div>
                          </div>
                          <div className="text-xs text-gray-400 mt-2">This usually takes 2-3 minutes</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tips & Preview */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                📸 Photo Tips for Best Results
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <h3 className="font-semibold text-gold-400 mb-2">✨ High Quality</h3>
                  <p className="text-gray-300 text-sm">Use clear, well-lit photos with good resolution (at least 512x512)</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <h3 className="font-semibold text-gold-400 mb-2">👤 Front-Facing</h3>
                  <p className="text-gray-300 text-sm">
                    {selectedCategory === 'pets' 
                      ? 'Pet should be clearly visible and facing toward camera'
                      : 'Face should be clearly visible and looking toward camera'
                    }
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <h3 className="font-semibold text-gold-400 mb-2">📷 Multiple Angles</h3>
                  <p className="text-gray-300 text-sm">Upload 2-3 photos from different angles for best AI understanding</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <h3 className="font-semibold text-gold-400 mb-2">🖼️ Single Subject</h3>
                  <p className="text-gray-300 text-sm">Best results with one {selectedCategory === 'pets' ? 'pet' : 'person'} per photo</p>
                </div>
              </div>

              {/* Sample Preview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Preview: Renaissance Royal Style</h3>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-900 to-red-900 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gold-400">
                      <Crown className="h-12 w-12 mx-auto mb-3" />
                      <p className="text-sm font-semibold">
                        {selectedCategory === 'pets' ? 'Your Pet as Renaissance Nobility' : 'You as Renaissance Royalty'}
                      </p>
                      <p className="text-xs text-gray-300 mt-1">Your photo will be transformed here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Info */}
              <div className="mt-6 bg-blue-500/20 border border-blue-400 rounded-xl p-4">
                <h3 className="text-blue-300 font-semibold mb-2">⏱️ Processing Time</h3>
                <p className="text-blue-200 text-sm">
                  Your royal transformation typically takes 2-4 minutes. We'll show you a preview first, 
                  then you can choose your preferred format and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}