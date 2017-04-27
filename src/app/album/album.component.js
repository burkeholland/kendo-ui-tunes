var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { orderBy } from '@progress/kendo-data-query';
var AlbumComponent = (function () {
    function AlbumComponent(itunesService) {
        this.itunesService = itunesService;
        this._artistId = 0;
        // controls the current grid sort state
        this.sort = [];
        // controls grid paging settings
        this.pageSize = 5;
        this.skip = 0;
    }
    Object.defineProperty(AlbumComponent.prototype, "artistId", {
        get: function () { return this._artistId; },
        set: function (artistId) {
            this._artistId = artistId;
            // get the albums for this artist
            this.getAlbums();
        },
        enumerable: true,
        configurable: true
    });
    AlbumComponent.prototype.getAlbums = function () {
        var _this = this;
        this.itunesService.getAlbums(this.artistId).then(function (results) {
            _this.view = {
                data: orderBy(results, _this.sort).slice(_this.skip, _this.skip + _this.pageSize),
                total: results.length
            };
        });
    };
    // fires when the sort is changed on the grid
    AlbumComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.getAlbums();
    };
    // fires when the user changes pages in the grid
    AlbumComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.getAlbums();
    };
    return AlbumComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], AlbumComponent.prototype, "artistId", null);
AlbumComponent = __decorate([
    Component({
        selector: 'app-album',
        templateUrl: './album.component.html',
        providers: [ItunesService]
    }),
    __metadata("design:paramtypes", [ItunesService])
], AlbumComponent);
export { AlbumComponent };
//# sourceMappingURL=album.component.js.map