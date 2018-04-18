import { Component, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  providers: [ItunesService],
  styleUrls: ['./artist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArtistComponent {
  searchResults: Array<any> = [];
  artistId = 0;

  selectedArtist: string;

  constructor(
    private itunesService: ItunesService,
    private playerService: PlayerService
  ) {}

  search(searchTerm: string) {
    this.itunesService.search(searchTerm).then(results => {
      this.searchResults = results;
    });
  }

  getAlbums(artistId: number, artistName: string) {
    this.playerService.pauseTrack();

    this.artistId = artistId;
    this.selectedArtist = artistName;
  }
}
