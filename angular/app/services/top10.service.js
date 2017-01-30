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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var Top10Service = (function () {
    function Top10Service(http) {
        this.http = http;
        this.players = [];
    }
    Top10Service.prototype.getTop10ByVictories = function () {
        var _this = this;
        return this.http.get('http://localhost:7777/api/v1/top10ByVictories')
            .map(function (response) {
            _this.players = response.json();
            return _this.players;
        })
            .catch(function (exception) {
            console.log(exception);
            return Rx_1.Observable.throw(exception);
        });
    };
    Top10Service.prototype.getTop10ByScore = function () {
        var _this = this;
        return this.http.get('http://localhost:7777/api/v1/top10ByScore')
            .map(function (response) {
            _this.players = response.json();
            return _this.players;
        })
            .catch(function (exception) {
            console.log(exception);
            return Rx_1.Observable.throw(exception);
        });
    };
    return Top10Service;
}());
Top10Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Top10Service);
exports.Top10Service = Top10Service;
//# sourceMappingURL=top10.service.js.map