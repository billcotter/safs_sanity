'use client'

import { Film, Heart, Star } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function FavoritesPage() {
  const { data: session } = useSession()
  const user = session?.user
  const membership = user?.membership

  // Mock favorites data - replace with actual data from your API
  const mockFavorites = [
    {
      id: '1',
      title: 'The Grand Budapest Hotel',
      director: 'Wes Anderson',
      year: 2014,
      poster:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
      rating: 4.5,
      addedDate: '2024-01-10',
    },
    {
      id: '2',
      title: 'Parasite',
      director: 'Bong Joon-ho',
      year: 2019,
      poster:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
      rating: 5.0,
      addedDate: '2024-01-05',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">My Favorites</h1>
        <p className="text-charcoal/70">
          Your personal collection of favorite films
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-terracotta mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.favoriteCount || 0}
              </p>
              <p className="text-sm text-charcoal/70">Total Favorites</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Film className="h-8 w-8 text-ocean-blue mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {mockFavorites.length}
              </p>
              <p className="text-sm text-charcoal/70">Films in Collection</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-ochre mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {mockFavorites.length > 0
                  ? (
                      mockFavorites.reduce(
                        (acc, film) => acc + film.rating,
                        0
                      ) / mockFavorites.length
                    ).toFixed(1)
                  : '0.0'}
              </p>
              <p className="text-sm text-charcoal/70">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-sandstone-dark">
        <div className="px-6 py-4 border-b border-sandstone-dark">
          <h2 className="text-xl font-semibold text-charcoal">
            Your Favorite Films
          </h2>
        </div>

        <div className="p-6">
          {mockFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFavorites.map((film) => (
                <div
                  key={film.id}
                  className="bg-sandstone-light rounded-lg overflow-hidden border border-sandstone-dark"
                >
                  <div className="aspect-[2/3] relative">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Heart className="h-5 w-5 text-terracotta fill-current" />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-charcoal mb-1">
                      {film.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-2">
                      {film.director} • {film.year}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-ochre fill-current mr-1" />
                        <span className="text-sm font-medium text-charcoal">
                          {film.rating}
                        </span>
                      </div>

                      <button className="text-xs text-ocean-blue hover:text-ocean-blue-dark transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="mx-auto h-12 w-12 text-charcoal/40 mb-4" />
              <h3 className="text-lg font-medium text-charcoal mb-2">
                No favorites yet
              </h3>
              <p className="text-charcoal/60 mb-4">
                Start adding films to your favorites to see them here
              </p>
              <button className="px-4 py-2 text-sm font-medium text-sandstone bg-ocean-blue hover:bg-ocean-blue-dark rounded-md transition-colors">
                Browse Films
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Recommended for You
        </h2>
        <div className="text-center py-8 text-charcoal/60">
          <Film className="mx-auto h-12 w-12 mb-4 text-ocean-blue" />
          <p>Personalized recommendations will appear here</p>
          <p className="text-sm mt-2">
            Based on your favorite films and viewing history
          </p>
        </div>
      </div>
    </div>
  )
}
