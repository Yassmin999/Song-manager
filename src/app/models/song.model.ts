export interface Song {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: number;
    audioUrl: string;
    imageUrl: string;
    formattedDuration?: string; 
  }