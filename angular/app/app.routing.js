"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var home_component_1 = require("./pages/home/home.component");
var history_component_1 = require("./pages/history/history.component");
var top10_component_1 = require("./pages/top10/top10.component");
var globalchat_component_1 = require("./pages/globalchat/globalchat.component");
var lobby_component_1 = require("./pages/lobby/lobby.component");
var pagenotfound_component_1 = require("./pages/pagenotfound/pagenotfound.component");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var game_component_1 = require("./pages/game/game.component");
var guard_service_1 = require("./services/guard.service");
var routes = [
    // Root
    { path: '', component: home_component_1.HomeComponent },
    { path: 'history', component: history_component_1.HistoryComponent },
    { path: 'top10', component: top10_component_1.Top10Component },
    { path: 'globalchat', component: globalchat_component_1.GlobalChatComponent, canActivate: [guard_service_1.GuardService] },
    { path: 'game', component: game_component_1.GameComponent, canActivate: [guard_service_1.GuardService] },
    { path: 'lobby', component: lobby_component_1.LobbyComponent, canActivate: [guard_service_1.GuardService] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map