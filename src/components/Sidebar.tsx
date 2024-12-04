import React, { useState } from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { FolderTree } from './library/FolderTree';
import { CreatePlaylistModal } from './library/CreatePlaylistModal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Folder } from '../types';

const initialLibrary: Folder = {
  id: 'root',
  name: 'Library Root',
  playlists: [],
  subfolders: [
    {
      id: 'music',
      name: 'Music',
      playlists: [
        {
          id: 'liked',
          name: 'Liked Songs',
          tracks: 123,
          coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
        }
      ],
      subfolders: []
    }
  ]
};

export function Sidebar() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [library, setLibrary] = useLocalStorage<Folder>('soundflow-library', initialLibrary);

  const handleCreatePlaylist = (name: string, description: string) => {
    const newPlaylist = {
      id: `playlist-${Date.now()}`,
      name,
      description,
      tracks: 0
    };

    setLibrary(prev => ({
      ...prev,
      subfolders: prev.subfolders.map(folder => 
        folder.id === 'music' 
          ? { ...folder, playlists: [...folder.playlists, newPlaylist] }
          : folder
      )
    }));
  };

  const handlePlaylistSelect = (playlistId: string) => {
    console.log('Selected playlist:', playlistId);
  };

  return (
    <aside className="w-64 bg-black p-6">
      <nav className="space-y-6">
        <div className="space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="h-6 w-6 mr-4" />
            <span className="font-semibold">Home</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="h-6 w-6 mr-4" />
            <span className="font-semibold">Search</span>
          </Button>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" className="flex items-center">
              <Library className="h-6 w-6 mr-4" />
              <span className="font-semibold">Your Library</span>
            </Button>
            <Button variant="ghost" onClick={() => setShowCreateModal(true)}>
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <FolderTree
              folder={library}
              onPlaylistSelect={handlePlaylistSelect}
            />
          </div>
        </div>
      </nav>

      {showCreateModal && (
        <CreatePlaylistModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreatePlaylist}
        />
      )}
    </aside>
  );
}