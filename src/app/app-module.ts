import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { CineComponent } from './components/cine-component/cine-component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';

@NgModule({
  declarations: [App, CineComponent, MenuComponent],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
