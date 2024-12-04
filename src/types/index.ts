export interface Playlist {
  id: string;
  name: string;
  description?: string;
  coverUrl?: string;
  tracks: number;
}

export interface Folder {
  id: string;
  name: string;
  playlists: Playlist[];
  subfolders: Folder[];
}