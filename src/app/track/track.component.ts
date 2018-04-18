import { Component, ViewEncapsulation, Input } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  providers: [ItunesService],
  styleUrls: ['./track.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackComponent {
  view: Array<any>;

  @Input()
  set collectionId(collectionId: number) {
    this.getTracks(collectionId);
  }

  constructor(
    private itunesService: ItunesService,
    private playerService: PlayerService
  ) {}

  private getTracks(collectionId: number) {
    this.itunesService.getTracks(collectionId).then(result => {
      this.view = result;
    });
  }
}
