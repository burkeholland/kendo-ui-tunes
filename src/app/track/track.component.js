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
var TrackComponent = (function () {
    function TrackComponent(itunesService) {
        this.itunesService = itunesService;
    }
    Object.defineProperty(TrackComponent.prototype, "collectionId", {
        set: function (collectionId) {
            this.getTracks(collectionId);
        },
        enumerable: true,
        configurable: true
    });
    TrackComponent.prototype.ngOnInit = function () {
    };
    TrackComponent.prototype.getTracks = function (collectionId) {
        var _this = this;
        this.itunesService.getTracks(collectionId).then(function (result) {
            _this.view = result;
        });
    };
    return TrackComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TrackComponent.prototype, "collectionId", null);
TrackComponent = __decorate([
    Component({
        selector: 'app-track',
        templateUrl: './track.component.html',
        providers: [ItunesService]
    }),
    __metadata("design:paramtypes", [ItunesService])
], TrackComponent);
export { TrackComponent };
//# sourceMappingURL=track.component.js.map