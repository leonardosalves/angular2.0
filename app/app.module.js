"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Módulo da aplicação
//importando classe do angular 2 NgModule para criar o modulo
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
//Decoretor NgModule
var AppModule = (function () {
    //exportar a classe depois de inicializar
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //importações de outros módulos
        //BrowserModule => adiciona recursor para aplicação poder rodar em um browser
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        //declarações, componentes que estão no modulo, prepara a visualiza~ção que aparecerá no html
        declarations: [app_component_1.AppComponent],
        //componente que irá iniciar o módulo
        //AppComponent => componente principal 
        bootstrap: [app_component_1.AppComponent]
    })
    //exportar a classe depois de inicializar
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map