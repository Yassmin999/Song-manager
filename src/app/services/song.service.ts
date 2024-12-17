import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
    private apiUrl = 'http://localhost:3000/songs';  

    constructor(private http: HttpClient) {}
  
    getSongs(): Observable<Song[]> {
      return this.http.get<Song[]>(this.apiUrl);
    }
  
    getSongById(id: number): Observable<Song> {
      return this.http.get<Song>(`${this.apiUrl}/${id}`);
    }
  
    addSong(song: Song): Observable<Song> {
      return this.http.post<Song>(this.apiUrl, song);
    }
  
    updateSong(song: Song): Observable<Song> {
      return this.http.put<Song>(`${this.apiUrl}/${song.id}`, song);
    }
  
    deleteSong(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }    
}
