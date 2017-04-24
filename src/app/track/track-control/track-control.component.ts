import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-track-control',
  templateUrl: './track-control.component.html',
  styleUrls: ['./track-control.component.scss']
})
export class TrackControlComponent implements OnInit, OnDestroy {

  isPlaying: boolean = false;
  @Input() public track: any;

  playSub: Subscription;
  endedSub: Subscription;

  constructor(private playerService: PlayerService) {
    this.playSub = playerService.playTrack$.subscribe(
      track => {
        this.isPlaying = false;
      });

    this.endedSub = playerService.trackEnded$.subscribe(() => {
      this.isPlaying = false;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.playSub.unsubscribe();
    this.endedSub.unsubscribe();
  }

  playTrack() {
    this.playerService.playTrack(this.track.previewUrl);
    this.isPlaying = true;
  }

  pauseTrack() {
    this.playerService.pauseTrack();
    this.isPlaying = false;
  }

}
