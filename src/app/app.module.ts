import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenulateralComponent } from './componentes/menulateral/menulateral.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    ToolbarComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
