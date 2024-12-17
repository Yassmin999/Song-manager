# SongManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## DB Structure and Adding Files
To store song data, create a `db.json` file with the following structure:

```json
{
  "songs": [
    {
      "id": "1",
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "genre": "Rock",
      "duration": 354,
      "audioUrl": "/assets/songs/bohemian_rhapsody.mp3",
      "imageUrl": "/assets/images/bohemian_rhapsody.jpg"
    },
    {
      "id": "2",
      "title": "Thunderstruck",
      "artist": "AC/DC",
      "genre": "Rock",
      "duration": 292,
      "audioUrl": "/assets/songs/thunderstruck.mp3",
      "imageUrl": "/assets/images/thunderstruck.png"
    }
  ]
}
```
You can add more songs in the same format. Make sure the "audioUrl" and "imageUrl" match the paths where your files are located.

### Adding Songs and Images:
1. **Songs**: Place your MP3 files in the `src/assets/songs/` directory. Ensure the filenames match those referenced in `db.json`. For example, place `bohemian_rhapsody.mp3` and `thunderstruck.mp3` in the `songs` folder.

2. **Images**: Place your song images (such as `.png`, `.jpg`, etc.) in the `src/assets/images/` directory. Ensure the filenames match those in `db.json`. For example, place `bohemian_rhapsody.jpg` and `thunderstruck.png` in the `images` folder.

### Default Login Credentials
The default login credentials for the application are:
- **Username**: `admin`
- **Password**: `admin`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
