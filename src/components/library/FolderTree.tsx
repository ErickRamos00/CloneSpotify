import React from 'react';
import { ChevronRight, ChevronDown, Folder as FolderIcon } from 'lucide-react';
import { Folder } from '../../types';
import { cn } from '../../lib/utils';

interface FolderTreeProps {
  folder: Folder;
  level?: number;
  onPlaylistSelect: (playlistId: string) => void;
}

export function FolderTree({ folder, level = 0, onPlaylistSelect }: FolderTreeProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center text-gray-400 hover:text-white transition px-2 py-1 rounded",
          "hover:bg-gray-900/40"
        )}
        style={{ paddingLeft: `${level * 16}px` }}
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 mr-2" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-2" />
        )}
        <FolderIcon className="h-4 w-4 mr-2" />
        <span className="text-sm">{folder.name}</span>
      </button>

      {isOpen && (
        <div className="space-y-1">
          {folder.playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => onPlaylistSelect(playlist.id)}
              className={cn(
                "w-full flex items-center text-gray-400 hover:text-white transition px-2 py-1 rounded",
                "hover:bg-gray-900/40"
              )}
              style={{ paddingLeft: `${(level + 1) * 16}px` }}
            >
              <span className="text-sm">{playlist.name}</span>
              <span className="text-xs ml-2 text-gray-500">{playlist.tracks} tracks</span>
            </button>
          ))}
          {folder.subfolders.map((subfolder) => (
            <FolderTree
              key={subfolder.id}
              folder={subfolder}
              level={level + 1}
              onPlaylistSelect={onPlaylistSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}