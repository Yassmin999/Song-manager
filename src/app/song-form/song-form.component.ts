import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../services/song.service';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent implements OnInit {
  songForm: FormGroup;
  songId: number | null = null;
  formTitle: string = 'Add Song';
  buttonLabel: string = 'Add';

  constructor(
    private fb: FormBuilder, //service
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.songForm = this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      genre: ['', Validators.required],
      duration: [0, Validators.required],
      audioUrl: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.songId = +id;
        this.formTitle = 'Edit Song';
        this.buttonLabel = 'Update';
        this.songService.getSongById(this.songId).subscribe(song => {
          this.songForm.patchValue(song);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.songForm.valid) {
      const song: Song = { ...this.songForm.value };
      if (this.songId !== null) {
        song.id = this.songId;  
        this.songService.updateSong(song).subscribe(
          () => {
            console.log('Song updated successfully');
            this.router.navigate(['/songs']);
          },
          error => {
            console.error('Error updating song:', error);
          }
        );
      } else {
        this.songService.addSong(song).subscribe(
          () => {
            console.log('Song added successfully');
            this.router.navigate(['/songs']);
          },
          error => {
            console.error('Error adding song:', error);
          }
        );
      }
    } else {
      this.songForm.markAllAsTouched(); 
      console.warn('Form is invalid');
    }
  }

  get formControls() {
    return this.songForm.controls;
  }
}
