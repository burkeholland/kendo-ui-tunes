import { Component, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './shared/player.service';
// hi
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PlayerService],
  styleUrls: ['../../node_modules/@progress/kendo-theme-material/dist/all.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
