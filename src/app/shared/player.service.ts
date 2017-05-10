import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Track } from './models/track';
 
@Injectable()
export class PlayerService {

  private playTrackSource = new Subject<Track>();
  private pauseTrackSource = new Subject();
  private trackEndedSource = new Subject();
  private frequencyDataSource = new Subject<Array<number>>();

  playTrack$ = this.playTrackSource.asObservable();
  pauseTrack$ = this.pauseTrackSource.asObservable();
  trackEnded$ = this.trackEndedSource.asObservable();
  frequencyData$ = this.frequencyDataSource.asObservable();

  playTrack(track: Track) {
    this.playTrackSource.next(track);
  }

  pauseTrack() {
    this.pauseTrackSource.next();
  }

  trackEnded() {
    this.trackEndedSource.next();
  }

  frequencyData(data: Uint8Array) {
    this.frequencyDataSource.next(Array.apply([], data));
  }
}
