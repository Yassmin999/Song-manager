import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';
import { Song } from '../models/song.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent implements OnInit {
    songs: Song[] = [];
    searchQry: string = ''; 

    constructor(private songService: SongService, private router: Router, private authService: AuthService) {}
  
    ngOnInit(): void {
        this.loadSongs();
      }

      loadSongs(): void {
        this.songService.getSongs().subscribe((songs) => {
          this.songs = songs.map((song) => ({
            ...song,
            formattedDuration: this.formatDuration(song.duration),
          }));
        });
      }
    
      get filteredSongs(): Song[] {
        return this.songs.filter(song =>
          song.title.toLowerCase().includes(this.searchQry.toLowerCase()) || 
          song.artist.toLowerCase().includes(this.searchQry.toLowerCase()) 
        );
      }
  
    deleteSong(id: number): void {
      this.songService.deleteSong(id).subscribe(() => {
        this.songs = this.songs.filter(song => song.id !== id);  
      });
    }

    editSong(id: number): void {
        this.router.navigate(['songs/edit', id]); 
    }

    addSong(): void { 
        this.router.navigate(['songs/add']); }

    formatDuration(seconds: number): string { 
        const minutes: number = Math.floor(seconds / 60); 
        const remainingSeconds: number = seconds % 60; 
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; 
    }

    logout(): void { this.authService.logout(); }
}
