//importar um decorator do angular 2, importado de ....
import {Component} from '@angular/core';

//Decoretor
@Component({
    //qual será a tag customizada do html que iremos usar:(objeto)
    selector: 'my-app',
    //template customizado do próprio componente com o `` fazendo o template em mult-linha
    template: `
        <h1>Hello World</h1>
    `
})
//Associar este decorator a uma classe relativo ao nome do arquivo 'app.component'
//export para usar a classe em outros arquivos, exportando a classe, usando o import em outro arquivo
export class AppComponent {

}