import {
  Component,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Subscription } from 'rxjs/Subscription';
import { Track } from '../../shared/models/track';

@Component({
  selector: 'app-track-control',
  templateUrl: './track-control.component.html',
  styleUrls: ['./track-control.component.scss']
})
export class TrackControlComponent implements OnDestroy {
  isPlaying: boolean = false;
  @Input() public track: Track;

  playSub: Subscription;
  endedSub: Subscription;

  constructor(private playerService: PlayerService) {
    this.playSub = playerService.playTrack$.subscribe(track => {
      this.isPlaying = false;
    });

    this.endedSub = playerService.trackEnded$.subscribe(() => {
      this.isPlaying = false;
    });
  }

  ngOnDestroy() {
    this.playSub.unsubscribe();
    this.endedSub.unsubscribe();
  }

  playTrack() {
    this.playerService.playTrack(this.track);
    this.isPlaying = true;
  }

  pauseTrack() {
    this.playerService.pauseTrack();
    this.isPlaying = false;
  }
}
