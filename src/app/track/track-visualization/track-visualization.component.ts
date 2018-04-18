import { Component, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Subscription } from 'rxjs/Subscription';
import { Track } from '../../shared/models/track';

@Component({
  selector: 'app-track-visualization',
  templateUrl: './track-visualization.component.html',
  styleUrls: ['./track-visualization.component.scss']
})
export class TrackVisualizationComponent implements OnDestroy {
  frequencySub: Subscription;
  playSub: Subscription;
  pauseSub: Subscription;
  endedSub: Subscription;
  frequencyData: Array<number>;

  @Input() track: Track;

  constructor(private playerService: PlayerService) {
    this.playSub = this.playerService.playTrack$.subscribe((track: Track) => {
      if (this.track.trackId === track.trackId) {
        this.frequencySub = this.playerService.frequencyData$.subscribe(
          frequencyData => { this.frequencyData = frequencyData; }
        );
      } else {
        if (this.frequencySub) {
          this.unsubscribe();
        }
      }
    });

    this.pauseSub = this.playerService.pauseTrack$.subscribe(() => {
      if (this.frequencySub) {
        this.unsubscribe();
      }
    });

    this.endedSub = this.playerService.trackEnded$.subscribe(() => {
      if (this.frequencySub) {
        this.unsubscribe();
      }
    });
  }

  private unsubscribe() {
    this.frequencySub.unsubscribe();
    this.frequencyData = [];
  }

  ngOnDestroy() {
    this.playSub.unsubscribe();
    this.endedSub.unsubscribe();
    this.pauseSub.unsubscribe();
  }
}
