import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import 'hammerjs';

// Import the Kendo UI Component
import { GridModule } from '@progress/kendo-angular-grid';
import { SparklineModule } from '@progress/kendo-angular-charts';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { TrackControlComponent } from './track/track-control/track-control.component';
import { PlayerComponent } from './player/player.component';
import { TrackVisualizationComponent } from './track/track-visualization/track-visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    TrackControlComponent,
    PlayerComponent,
    TrackVisualizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    // import the Kendo UI Component into the module
    GridModule,
    SparklineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
