import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  providers: [ItunesService]
})
export class TrackComponent implements OnInit {

  view: Array<any>;

  @Input() 
  set collectionId(collectionId: number) {
    this.getTracks(collectionId);
  }

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
  }

  private getTracks(collectionId: number) {
    this.itunesService.getTracks(collectionId).then(result => {
      this.view = result;
    });
  }

}
