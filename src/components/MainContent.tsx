import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

function AlbumCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="bg-gray-900/40 p-4 rounded-lg hover:bg-gray-900/60 transition group">
      <div className="relative">
        <img src={image} alt={title} className="w-full aspect-square object-cover rounded-md mb-4" />
        <button className={cn(
          "absolute bottom-2 right-2 bg-green-500 rounded-full p-3",
          "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
          "transition-all duration-200 shadow-lg hover:scale-105 hover:bg-green-400"
        )}>
          <Play className="h-5 w-5 text-black" fill="black" />
        </button>
      </div>
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export function MainContent() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Good evening</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <MoreHorizontal className="h-6 w-6" />
            </button>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Recently Played</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AlbumCard
              image="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop"
              title="Chill Vibes"
              description="Perfect for your relaxation moments"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
              title="Jazz Classics"
              description="The best of jazz music"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop"
              title="Electronic Beats"
              description="Get your groove on"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
              title="Acoustic Sessions"
              description="Unplugged and intimate"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Made for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AlbumCard
              image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
              title="Daily Mix 1"
              description="Based on your recent listening"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
              title="Discover Weekly"
              description="Your weekly mixtape of fresh music"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
              title="Release Radar"
              description="New releases from artists you follow"
            />
            <AlbumCard
              image="https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop"
              title="Radio"
              description="Based on your favorite tracks"
            />
          </div>
        </section>
      </div>
    </main>
  );
}