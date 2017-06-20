"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//importar um decorator do angular 2, importado de ....
var core_1 = require("@angular/core");
//Decoretor
var AppComponent = (function () {
    //Associar este decorator a uma classe relativo ao nome do arquivo 'app.component'
    //export para usar a classe em outros arquivos, exportando a classe, usando o import em outro arquivo
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //qual será a tag customizada do html que iremos usar:(objeto)
        selector: 'my-app',
        //template customizado do próprio componente com o `` fazendo o template em mult-linha
        template: "\n        <h1>Hello World</h1>\n    "
    })
    //Associar este decorator a uma classe relativo ao nome do arquivo 'app.component'
    //export para usar a classe em outros arquivos, exportando a classe, usando o import em outro arquivo
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map