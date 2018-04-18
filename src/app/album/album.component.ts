import { Component, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { PlayerService } from '../shared/player.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [ItunesService]
})
export class AlbumComponent {
  view: GridDataResult;

  _artistId: number = 0;

  // controls the current grid sort state
  sort: SortDescriptor[] = [];

  // controls grid paging settings
  pageSize: number = 5;
  skip: number = 0;

  @Input()
  set artistId(artistId: number) {
    this._artistId = artistId;

    // get the albums for this artist
    this.getAlbums();
  }
  get artistId() {
    return this._artistId;
  }

  constructor(
    private itunesService: ItunesService,
    private playerService: PlayerService
  ) {}

  getAlbums() {
    this.itunesService.getAlbums(this.artistId).then((results: Array<any>) => {
      this.view = {
        data: orderBy(results, this.sort).slice(
          this.skip,
          this.skip + this.pageSize
        ),
        total: results.length
      };
    });
  }

  // fires when the sort is changed on the grid
  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.getAlbums();
  }

  // fires when the user changes pages in the grid
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.getAlbums();
  }

  // pauses the currently playing track when the row is collapsed
  pauseTrack() {
    this.playerService.pauseTrack();
  }
}
