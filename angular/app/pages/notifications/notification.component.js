"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var game_service_1 = require('../../services/game.service');
var NotificationComponent = (function () {
    function NotificationComponent(gameService) {
        this.gameService = gameService;
        this.playersChannel = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getPlayersMessages().subscribe(function (response) { return _this.playersChannel.push(response); });
    };
    NotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notification-panel',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.css']
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map