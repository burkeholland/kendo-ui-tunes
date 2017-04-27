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
import { PlayerService } from '../../shared/player.service';
var TrackControlComponent = (function () {
    function TrackControlComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.isPlaying = false;
        this.playSub = playerService.playTrack$.subscribe(function (track) {
            _this.isPlaying = false;
        });
        this.endedSub = playerService.trackEnded$.subscribe(function () {
            _this.isPlaying = false;
        });
    }
    TrackControlComponent.prototype.ngOnInit = function () {
    };
    TrackControlComponent.prototype.ngOnDestroy = function () {
        this.playSub.unsubscribe();
        this.endedSub.unsubscribe();
    };
    TrackControlComponent.prototype.playTrack = function () {
        this.playerService.playTrack(this.track.previewUrl);
        this.isPlaying = true;
    };
    TrackControlComponent.prototype.pauseTrack = function () {
        this.playerService.pauseTrack();
        this.isPlaying = false;
    };
    return TrackControlComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TrackControlComponent.prototype, "track", void 0);
TrackControlComponent = __decorate([
    Component({
        selector: 'app-track-control',
        templateUrl: './track-control.component.html',
        styleUrls: ['./track-control.component.scss']
    }),
    __metadata("design:paramtypes", [PlayerService])
], TrackControlComponent);
export { TrackControlComponent };
//# sourceMappingURL=track-control.component.js.map