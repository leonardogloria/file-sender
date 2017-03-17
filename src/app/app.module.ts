import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './footer/footer.component';
import { TopoComponent } from './topo/topo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {routing} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    FooterComponent,
    TopoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
