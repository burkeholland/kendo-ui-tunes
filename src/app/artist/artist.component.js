var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { PlayerService } from '../shared/player.service';
var ArtistComponent = (function () {
    function ArtistComponent(itunesService, playerService) {
        this.itunesService = itunesService;
        this.playerService = playerService;
        this.searchResults = [];
        this.artistId = 0;
    }
    ArtistComponent.prototype.search = function (searchTerm) {
        var _this = this;
        this.itunesService.search(searchTerm).then(function (results) {
            _this.searchResults = results;
        });
    };
    ArtistComponent.prototype.getAlbums = function (artistId, artistName) {
        this.playerService.pauseTrack();
        this.artistId = artistId;
        this.selectedArtist = artistName;
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    Component({
        selector: 'app-artist',
        templateUrl: './artist.component.html',
        providers: [ItunesService],
        styleUrls: ['./artist.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ItunesService, PlayerService])
], ArtistComponent);
export { ArtistComponent };
//# sourceMappingURL=artist.component.js.map