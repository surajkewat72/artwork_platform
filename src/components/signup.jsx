import { useState } from 'react'

export default function Signup({ onBackToGallery }) {
  const [isSignIn, setIsSignIn] = useState(false)
  const [role, setRole] = useState('collector') // 'collector' | 'artist'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    // Pure design preview, prevent actual form submission
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#121212] font-sans flex flex-col justify-between py-12 px-6 sm:px-8 relative overflow-hidden transition-all duration-300">
      
      {/* Close/Back Button */}
      <button 
        onClick={onBackToGallery}
        className="absolute top-8 right-8 text-gray-400 hover:text-[#121212] transition-colors p-2 rounded-full hover:bg-gray-100/50 cursor-pointer group focus:outline-hidden"
        title="Back to Gallery"
      >
        <svg className="size-6 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center items-center max-w-md w-full mx-auto my-auto relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div 
            onClick={onBackToGallery}
            className="inline-block cursor-pointer font-serif italic text-3xl font-bold tracking-tight text-gray-900 mb-6 hover:opacity-80 transition-opacity"
          >
            ArtisanHub
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl text-gray-900 font-semibold tracking-tight leading-tight max-w-xs mx-auto mb-3">
            {isSignIn ? 'Welcome Back to ArtisanHub' : 'Join the ArtisanHub Community'}
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto font-light">
            {isSignIn 
              ? 'Sign in to access your curated collection and collaborate with artists.' 
              : 'Connect with world-class artisans and start your collection.'}
          </p>
        </div>

        <div className="w-full transition-all duration-300">
          {/* Collector / Artist Switcher */}
          <div className="bg-[#eae7e2] p-1.5 rounded-full flex w-full max-w-xs mx-auto mb-8 shadow-xs border border-gray-200/25">
            <button
              type="button"
              onClick={() => setRole('collector')}
              className={`flex-1 text-center py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 cursor-pointer focus:outline-hidden ${
                role === 'collector'
                  ? 'bg-[#121212] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Collector
            </button>
            <button
              type="button"
              onClick={() => setRole('artist')}
              className={`flex-1 text-center py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 cursor-pointer focus:outline-hidden ${
                role === 'artist'
                  ? 'bg-[#121212] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Artist
            </button>
          </div>

          {/* Standard Signup / Signin Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            
            {/* Full Name Input (Only on Sign Up) */}
            {!isSignIn && (
              <div className="flex flex-col text-left group">
                <label htmlFor="name" className="text-[9px] font-bold tracking-widest text-gray-400 uppercase transition-colors duration-200 group-focus-within:text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder={role === 'artist' ? 'e.g., Jean-Luc Godard' : ' suraj'}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-b border-gray-200 focus:border-black bg-transparent py-2.5 text-sm outline-hidden focus:outline-hidden transition-colors duration-200 placeholder-gray-300/80 text-gray-800 w-full"
                />
              </div>
            )}

            {/* Email Address Input */}
            <div className="flex flex-col text-left group">
              <label htmlFor="email" className="text-[9px] font-bold tracking-widest text-gray-400 uppercase transition-colors duration-200 group-focus-within:text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="username"
                placeholder="suraj@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="border-b border-gray-200 focus:border-black bg-transparent py-2.5 text-sm outline-hidden focus:outline-hidden transition-colors duration-200 placeholder-gray-300/80 text-gray-800 w-full"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col text-left group relative">
              <label htmlFor="new-password" className="text-[9px] font-bold tracking-widest text-gray-400 uppercase transition-colors duration-200 group-focus-within:text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="new-password"
                  name="password"
                  autoComplete={isSignIn ? 'current-password' : 'new-password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-b border-gray-200 focus:border-black bg-transparent py-2.5 pr-10 text-sm outline-hidden focus:outline-hidden transition-colors duration-200 placeholder-gray-300/80 text-gray-800 w-full"
                />
                
                {/* Password Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#121212] transition-colors focus:outline-hidden"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#121212] hover:bg-black active:bg-neutral-800 text-white font-bold py-4 text-[10px] tracking-widest uppercase rounded-md transition-all duration-300 cursor-pointer shadow-xs flex items-center justify-center gap-2 focus:outline-hidden"
            >
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Mode Link */}
          <div className="mt-8 text-center text-xs">
            <span className="text-gray-500">
              {isSignIn ? 'New to ArtisanHub? ' : 'Already have an account? '}
            </span>
            <button
              type="button"
              onClick={() => {
                setIsSignIn(!isSignIn)
                setFormData({ name: '', email: '', password: '' })
              }}
              className="font-semibold text-gray-900 hover:text-black underline transition-colors cursor-pointer focus:outline-hidden"
            >
              {isSignIn ? 'Join Now' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-12 relative z-10 select-none">
        <span className="text-[9px] font-bold tracking-widest text-gray-400/80 uppercase">
          EST. 2024 • ARTISANHUB GALLERY
        </span>
      </div>

      {/* BACKGROUND GRAPHIC ACCENTS (PREMIUM SLEEK AESTHETICS) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#edebe6] to-transparent opacity-45 pointer-events-none blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-[#ece9e1] to-transparent opacity-45 pointer-events-none blur-3xl"></div>
    </div>
  )
}
