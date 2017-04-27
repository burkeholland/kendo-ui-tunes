var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
var PlayerService = (function () {
    function PlayerService() {
        this.playTrackSource = new Subject();
        this.pauseTrackSource = new Subject();
        this.trackEndedSource = new Subject();
        this.playTrack$ = this.playTrackSource.asObservable();
        this.pauseTrack$ = this.pauseTrackSource.asObservable();
        this.trackEnded$ = this.trackEndedSource.asObservable();
    }
    PlayerService.prototype.playTrack = function (previewUrl) {
        this.playTrackSource.next(previewUrl);
    };
    PlayerService.prototype.pauseTrack = function () {
        this.pauseTrackSource.next();
    };
    PlayerService.prototype.trackEnded = function () {
        this.trackEndedSource.next();
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Injectable()
], PlayerService);
export { PlayerService };
//# sourceMappingURL=player.service.js.map