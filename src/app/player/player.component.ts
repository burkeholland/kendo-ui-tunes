import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { ChartComponent } from '@progress/kendo-angular-charts';
import { Track } from '../shared/models/track';

declare var window;

window.AudioContext = window.AudioContext || window.webkitAudioContext;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  @ViewChild('player') playerRef: any;
  @ViewChild('visualiser') chartRef: any;
  player: any;
  fftSize = 128;
  smoothingTimeConstant = 0.3;
  audioContext: AudioContext;
  audioSource: MediaElementAudioSourceNode;
  analyser: AnalyserNode;
  frequencyData: Uint8Array;
  timeDomainData: Uint8Array;
  data: Array<number>;
  cancel: any;

  /*
    We setup our subscriptions to the player service in the constructor.
    This allows us to listen for the `play` and `pause` events, and raise the
    `end` event. This is how the track component communicates with the audio
    player component.
  */
  constructor(private playerService: PlayerService, public ngZone: NgZone) {
    playerService.playTrack$.subscribe(track => {
      this.playTrack(track.trackCensoredName);
    });

    playerService.pauseTrack$.subscribe(() => {
      this.pauseTrack();
    });
  }

  ngOnInit() {
    // Setting up web audio to pull data from the track which is used as
    // the data for the visualiser component. Pulled from John Bristowe
    // https://github.com/jbristowe/kendo-ui-audio/blob/master/main.js

    this.player = this.playerRef.nativeElement;

    // The audio player needs this setting in order to use CORS to avoid
    // cross-domain errors. iTunes API supports CORS.
    this.player.crossOrigin = 'anonymous';

    // IE11 doesn't support AudioContext, so we check for it first
    if (AudioContext) {
      this.audioContext = new AudioContext();
      this.audioSource = this.audioContext.createMediaElementSource(
        this.player
      );

      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      this.analyser.smoothingTimeConstant = this.smoothingTimeConstant;

      this.audioSource.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount);
    }
  }

  playTrack(previewUrl: string) {
    cancelAnimationFrame(this.cancel);

    this.player.src = previewUrl;
    this.player.play();

    if (AudioContext) {
      this.draw();
    }
  }

  /*
    This function is called over and over again while a track is playing.
    Each time this function is called, the array of audio data is updated
    and the Kendo UI Chart will be redrawn. Using requestAnimationFrame helps us call it efficiently.
  */
  draw() {
    this.analyser.getByteFrequencyData(this.frequencyData);
    this.analyser.getByteTimeDomainData(this.timeDomainData);

    this.data = Array.apply([], this.frequencyData);

    this.playerService.frequencyData(this.frequencyData);

    this.cancel = requestAnimationFrame(() => this.draw());
  }

  pauseTrack() {
    this.player.pause();
    cancelAnimationFrame(this.cancel);
  }

  playerEnded() {
    this.playerService.trackEnded();
    cancelAnimationFrame(this.cancel);
  }
}
