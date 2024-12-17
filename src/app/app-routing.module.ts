import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongFormComponent } from './song-form/song-form.component';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: 'songs', component: SongListComponent , canActivate: [AuthGuard]},
    { path: 'songs/edit/:id', component: SongFormComponent },
    { path: 'songs/add', component: SongFormComponent },
    { path: '', redirectTo: '/songs', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
