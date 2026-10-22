import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { CineComponent } from './components/cine-component/cine-component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { MenuTablaMultiplicar } from './components/menu-tabla-multiplicar/menu-tabla-multiplicar';

@NgModule({
  declarations: [
    App,
    CineComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarComponent,
    MenuTablaMultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
