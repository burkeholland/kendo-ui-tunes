var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// Import the Kendo UI Component
import { GridModule } from '@progress/kendo-angular-grid';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { TrackControlComponent } from './track/track-control/track-control.component';
import { PlayerComponent } from './player/player.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ArtistComponent,
            AlbumComponent,
            TrackComponent,
            TrackControlComponent,
            PlayerComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpModule,
            JsonpModule,
            // import the Kendo UI Component into the module
            GridModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map