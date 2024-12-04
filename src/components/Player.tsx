import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&h=100&fit=crop"
            alt="Album Cover"
            className="w-14 h-14 rounded-md"
          />
          <div>
            <h4 className="text-white font-medium">Summer Nights</h4>
            <p className="text-gray-400 text-sm">Acoustic Band</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition">
              <Shuffle className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipBack className="h-5 w-5" />
            </button>
            <button className={cn(
              "bg-white rounded-full p-2 hover:scale-105 transition",
              "flex items-center justify-center"
            )}>
              <Play className="h-5 w-5 text-black" />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipForward className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Repeat className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full max-w-md flex items-center space-x-2">
            <span className="text-xs text-gray-400">1:23</span>
            <div className="flex-1 h-1 bg-gray-800 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Volume2 className="h-5 w-5 text-gray-400" />
          <div className="w-24 h-1 bg-gray-800 rounded-full">
            <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}