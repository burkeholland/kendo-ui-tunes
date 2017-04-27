var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
var API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
};
var ItunesService = (function () {
    function ItunesService(jsonp) {
        this.jsonp = jsonp;
        this.searchTerm = "";
        this._albums = [];
        this._artistId = 0;
    }
    ItunesService.prototype.search = function (searchTerm) {
        return this.jsonp.get(API.SEARCH + "callback=JSONP_CALLBACK&media=music&country=US&entity=musicArtist&term=" + searchTerm)
            .toPromise()
            .then(function (data) { return data.json().results; })
            .catch(this.handleError);
    };
    ItunesService.prototype.getAlbums = function (artistId) {
        var _this = this;
        if (artistId == this._artistId)
            return new Promise(function (resolve) { return resolve(_this._albums); });
        this._artistId = artistId;
        return this.jsonp.get(API.LOOKUP + "callback=JSONP_CALLBACK&entity=album&id=" + artistId)
            .toPromise()
            .then(function (data) {
            _this._albums = data.json().results.filter(function (results) {
                return results.wrapperType == 'collection';
            });
            return _this._albums;
        })
            .catch(this.handleError);
    };
    ItunesService.prototype.getTracks = function (albumId) {
        return this.jsonp.get(API.LOOKUP + "callback=JSONP_CALLBACK&entity=song&id=" + albumId)
            .toPromise()
            .then(function (data) {
            return data.json().results.filter(function (result) {
                return result.wrapperType == 'track';
            });
        })
            .catch(this.handleError);
    };
    ItunesService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    return ItunesService;
}());
ItunesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Jsonp])
], ItunesService);
export { ItunesService };
//# sourceMappingURL=itunes.service.js.map