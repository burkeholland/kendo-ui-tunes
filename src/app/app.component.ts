import { Component } from '@angular/core';
import { PlayerService } from './shared/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PlayerService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
