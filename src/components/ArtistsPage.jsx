import { useState } from 'react'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

const initialArtists = [
  {
    id: 1,
    name: 'Aanya Sharma',
    specialty: 'Oil & Mixed Media',
    rating: 4.8,
    location: 'Mumbai',
    mediums: ['Oil'],
    price: 250000,
    verified: false,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&h=250&q=80',
    artwork: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Rohan Desai',
    specialty: 'Contemporary Ceramics',
    rating: 4.9,
    location: 'Delhi',
    mediums: ['Clay', 'Ceramics'],
    price: 65000,
    verified: false,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&h=250&q=80',
    artwork: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Priya Patel',
    specialty: 'Watercolor Specialist',
    rating: 4.7,
    location: 'Bengaluru',
    mediums: ['Photography', 'Oil'],
    price: 120000,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=250&h=250&q=80',
    artwork: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    specialty: 'Generative Art',
    rating: 4.4,
    location: 'Jaipur',
    mediums: ['Digital'],
    price: 350000,
    verified: false,
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=250&h=250&q=80',
    artwork: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  }
]

const availableMediums = ['Oil', 'Clay', 'Digital', 'Ceramics', 'Photography']

export default function ArtistsPage() {
  const [artists] = useState(initialArtists)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMedium, setSelectedMedium] = useState('Clay') // Set 'Clay' selected by default as in the mockup
  const [priceRange, setPriceRange] = useState(500000)
  const [ratingFilters, setRatingFilters] = useState({
    fourFivePlus: false,
    fourPlus: false,
  })
  const [locationQuery, setLocationQuery] = useState('')
  const [followedArtists, setFollowedArtists] = useState(new Set())

  // Toggle follow status
  const handleFollowToggle = (id) => {
    setFollowedArtists((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Toggle rating filters
  const handleRatingToggle = (key) => {
    setRatingFilters((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Filtered artists logic
  const filteredArtists = artists.filter((artist) => {
    // 1. Text Search query (matches name or specialty)
    const matchesSearch =
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.specialty.toLowerCase().includes(searchQuery.toLowerCase())

    // 2. Medium filter
    const matchesMedium = selectedMedium
      ? artist.mediums.some(m => m.toLowerCase() === selectedMedium.toLowerCase())
      : true

    // 3. Price filter
    const matchesPrice = artist.price <= priceRange

    // 4. Rating filter
    let matchesRating = true
    if (ratingFilters.fourFivePlus && artist.rating < 4.5) {
      matchesRating = false
    }
    if (ratingFilters.fourPlus && artist.rating < 4.0) {
      matchesRating = false
    }

    // 5. Location filter
    const matchesLocation = locationQuery
      ? artist.location.toLowerCase().includes(locationQuery.toLowerCase())
      : true

    return matchesSearch && matchesMedium && matchesPrice && matchesRating && matchesLocation
  })

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          
          {/* Sidebar / Filters Column */}
          <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
            
            {/* Filter by Medium */}
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xs font-bold tracking-widest text-neutral-900 uppercase mb-4">
                Filter by Medium
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {availableMediums.map((medium) => {
                  const isSelected = selectedMedium === medium
                  return (
                    <button
                      key={medium}
                      type="button"
                      onClick={() => setSelectedMedium(isSelected ? '' : medium)}
                      className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                          : 'border-neutral-250 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 bg-white'
                      }`}
                    >
                      {medium}
                    </button>
                  )
                })}
              </div>
            </div>

            Price Range
            <div className="border-b border-gray-100 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
                  Price Range
                </h3>
              </div>
              <div className="relative mt-2">
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#a87c53]"
                  style={{
                    background: `linear-gradient(to right, #a87c53 0%, #a87c53 ${(priceRange / 500000) * 100}%, #e5e7eb ${(priceRange / 500000) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between items-center text-xs font-medium text-neutral-500 mt-3">
                  <span>₹0</span>
                  <span className="text-[#a87c53] font-bold text-sm bg-neutral-50 px-2 py-0.5 rounded-md border border-neutral-100">
                    Max: ₹{priceRange === 500000 ? '5,00,000+' : priceRange.toLocaleString('en-IN')}
                  </span>
                  <span>₹5,00,000+</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xs font-bold tracking-widest text-neutral-900 uppercase mb-4">
                Rating
              </h3>
              <div className="space-y-3.5">
                <label className="flex items-center gap-3 cursor-pointer group text-sm text-neutral-600 hover:text-neutral-900">
                  <input
                    type="checkbox"
                    checked={ratingFilters.fourFivePlus}
                    onChange={() => handleRatingToggle('fourFivePlus')}
                    className="size-4.5 rounded-sm border-neutral-300 text-neutral-900 focus:ring-neutral-900/20 accent-neutral-900 cursor-pointer"
                  />
                  <span className="font-medium">4.5 & Up</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group text-sm text-neutral-600 hover:text-neutral-900">
                  <input
                    type="checkbox"
                    checked={ratingFilters.fourPlus}
                    onChange={() => handleRatingToggle('fourPlus')}
                    className="size-4.5 rounded-sm border-neutral-300 text-neutral-900 focus:ring-neutral-900/20 accent-neutral-900 cursor-pointer"
                  />
                  <span className="font-medium">4.0 & Up</span>
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="pb-4">
              <h3 className="text-xs font-bold tracking-widest text-neutral-900 uppercase mb-4">
                Location
              </h3>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <MapPinIcon className="size-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search City..."
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-250 focus:border-neutral-900 focus:bg-white rounded-lg focus:outline-hidden transition-all duration-200"
                />
              </div>
            </div>

          </aside>

          {/* Main Content Column */}
          <main className="flex-1 flex flex-col gap-8">
            
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-neutral-400">
                <MagnifyingGlassIcon className="size-5" />
              </span>
              <input
                type="text"
                placeholder="Search by style or artist name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-sm md:text-base bg-neutral-50/70 border border-transparent focus:border-neutral-200 focus:bg-white focus:outline-hidden transition-all duration-200"
              />
            </div>

            {/* Artists Grid */}
            {filteredArtists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-10">
                {filteredArtists.map((artist) => {
                  const isFollowed = followedArtists.has(artist.id)
                  return (
                    <article key={artist.id} className="group flex flex-col justify-between">
                      <div>
                        {/* Artwork Cover Image */}
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 shadow-xs group-hover:shadow-md transition-all duration-300">
                          <img
                            src={artist.artwork}
                            alt={`${artist.name} Artwork`}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                          
                          {/* Verified Badge */}
                          {artist.verified && (
                            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-white/20">
                              <CheckIcon className="size-3 text-neutral-900 stroke-[3]" />
                              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-900 leading-none">
                                Verified
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Artist Info Footer */}
                        <div className="mt-5 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <img
                              src={artist.avatar}
                              alt={artist.name}
                              className="size-11 rounded-full object-cover border border-neutral-200"
                            />
                            {/* Text */}
                            <div className="flex flex-col text-left">
                              <h4 className="text-sm font-bold text-neutral-900 font-sans tracking-tight leading-tight">
                                {artist.name}
                              </h4>
                              <span className="text-[11px] font-medium text-neutral-500 mt-0.5">
                                {artist.specialty}
                              </span>
                            </div>
                          </div>

                          {/* Follow Button */}
                          <button
                            type="button"
                            onClick={() => handleFollowToggle(artist.id)}
                            className={`text-[10px] font-bold tracking-widest uppercase border px-4.5 py-2.5 transition-all duration-200 cursor-pointer ${
                              isFollowed
                                ? 'bg-neutral-950 border-neutral-950 text-white shadow-xs'
                                : 'bg-transparent border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:text-neutral-900'
                            }`}
                          >
                            {isFollowed ? 'Following' : 'Follow'}
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-neutral-200 rounded-2xl">
                <span className="text-lg font-serif font-medium text-neutral-900 mb-2">
                  No Artists Found
                </span>
                <p className="text-sm text-neutral-500 max-w-xs">
                  We couldn't find any artists matching your search query or filters. Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedMedium('')
                    setPriceRange(500000)
                    setRatingFilters({ fourFivePlus: false, fourPlus: false })
                    setLocationQuery('')
                  }}
                  className="mt-6 text-xs font-bold tracking-widest text-neutral-900 uppercase border-b border-neutral-900 pb-0.5 hover:text-neutral-600 transition"
                >
                  Clear All Filters
                </button>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  )
}
