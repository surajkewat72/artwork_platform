

const categories = [
  {
    name: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80',
    // href: '#'
  },
  {
    name: 'Oil Paintings',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
    // href: '#'
  },
  {
    name: 'Sculptures',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=600&q=80',
    // href: '#'
  },
  {
    name: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    // href: '#'
  }
]

const featuredArtists = [
  {
    name: 'Aarav Mehta',
    style: 'CONTEMPORARY CERAMICS',
    artworks: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=250&h=250&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=250&h=250&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=250&h=250&q=80'
    ]
  },
  {
    name: 'Ananya Iyer',
    style: 'ABSTRACT EXPRESSIONISM',
    artworks: [
      'https://images.unsplash.com/photo-72781541701494587-cb58502866ab?auto=format&fit=crop&w=250&h=250&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=250&h=250&q=80',
    //   'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=250&h=250&q=80'
    ]
  },
  {
    name: 'Kabir Sen',
    style: 'MODERN SCULPTURE',
    artworks: [
      'https://images.unsplash.com/photo-72781605721911519-3dfeb3be25e7?auto=format&fit=crop&w=250&h=250&q=80',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=250&h=250&q=80',
      'https://images.unsplash.com/photo-72781576016770956-debb63d900fd?auto=format&fit=crop&w=250&h=250&q=80'
    ]
  }
]

const valuePropositions = [
  {
    title: 'Verified Artists',
    description: 'Every artisan on our platform undergoes a rigorous vetting process to ensure exceptional quality and authenticity.'
  },
  {
    title: 'Secure Payments',
    description: 'Enjoy peace of mind with encrypted transactions and buyer protection policies for every masterpiece you acquire.'
  },
  {
    title: 'Custom Commissions',
    description: 'Collaborate directly with your favorite artists to bring a bespoke vision to life, uniquely tailored for your space.'
  }
]

export default function Hero({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-[85vh] flex items-center justify-start bg-cover bg-center overflow-hidden py-24 md:py-32"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        {/* Dark dimming overlay */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        {/* Content Container */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full z-10 text-left">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight">
              Where Raw Talent<br />
              Meets Refined<br />
              Living.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-lg font-sans font-light">
              Discover a curated collection of handmade masterpieces from independent artists worldwide. Elevate your space with soul.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setActiveTab && setActiveTab('ARTISTS')}
                className="bg-black hover:bg-neutral-900 border border-black text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer focus:outline-hidden"
              >
                Explore Unique Art
              </button>
              <button
                type="button"
                onClick={() => setActiveTab && setActiveTab('ARTISTS')}
                className="bg-transparent hover:bg-white hover:text-black border border-white text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer focus:outline-hidden"
              >
                View Artists
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Categories Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-[#a87c53] uppercase mb-2 block">
            THE COLLECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-semibold tracking-tight">
            Curated Categories
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-gray-900"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block text-center">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xs group-hover:shadow-md transition-all duration-300">
                <img
                  alt={category.name}
                  src={category.image}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-serif text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Artists Section (Spotlight) */}
      <div className="bg-[#f7f5f2] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#a87c53] uppercase mb-1 block">
                SPOTLIGHT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-semibold tracking-tight">
                Featured Artists
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('ARTISTS')}
              className="mt-4 sm:mt-0 inline-block text-xs font-bold tracking-widest text-gray-900 hover:text-gray-600 transition-colors uppercase border-b border-gray-900 pb-0.5 cursor-pointer focus:outline-hidden"
            >
              View All Artists
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <div
                key={artist.name}
                className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100/50 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                {/* Profile Header */}
                <div className="flex flex-col mb-5">
                  <h3 className="text-base font-semibold text-gray-900 font-sans leading-tight">
                    {artist.name}
                  </h3>
                  <span className="text-[10px] tracking-wider font-semibold text-gray-400 uppercase mt-0.5">
                    {artist.style}
                  </span>
                </div>

                {/* Artwork Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  {artist.artworks.map((artwork, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100/50">
                      <img
                        alt={`${artist.name} Artwork ${idx + 1}`}
                        src={artwork}
                        className="size-full object-cover hover:opacity-90 transition-opacity duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Propositions Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {valuePropositions.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
