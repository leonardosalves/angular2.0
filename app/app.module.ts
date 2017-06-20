//Módulo da aplicação
//importando classe do angular 2 NgModule para criar o modulo
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

//Decoretor NgModule
@NgModule({
    //importações de outros módulos
    //BrowserModule => adiciona recursor para aplicação poder rodar em um browser
    imports: [BrowserModule],
    //declarações, componentes que estão no modulo, prepara a visualiza~ção que aparecerá no html
    declarations: [AppComponent],
    //componente que irá iniciar o módulo
    //AppComponent => componente principal 
    bootstrap: [AppComponent]
})
//exportar a classe depois de inicializar
export class AppModule {

}