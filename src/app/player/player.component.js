var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { PlayerService } from '../shared/player.service';
var PlayerComponent = (function () {
    function PlayerComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        playerService.playTrack$.subscribe(function (previewUrl) {
            _this.playTrack(previewUrl);
        });
        playerService.pauseTrack$.subscribe(function () {
            _this.pauseTrack();
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.player = this.playerRef.nativeElement;
    };
    PlayerComponent.prototype.playTrack = function (previewUrl) {
        this.player.src = previewUrl;
        this.player.play();
    };
    PlayerComponent.prototype.pauseTrack = function () {
        this.player.pause();
    };
    PlayerComponent.prototype.playerEnded = function () {
        this.playerService.trackEnded();
    };
    return PlayerComponent;
}());
__decorate([
    ViewChild('player'),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "playerRef", void 0);
PlayerComponent = __decorate([
    Component({
        selector: 'app-player',
        templateUrl: './player.component.html'
    }),
    __metadata("design:paramtypes", [PlayerService])
], PlayerComponent);
export { PlayerComponent };
//# sourceMappingURL=player.component.js.map