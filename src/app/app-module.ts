import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { CineComponent } from './components/cine-component/cine-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { HomeComponent } from './components/home-component/home-component';
import { MusicComponent } from './components/music-component/music-component';

@NgModule({
  declarations: [App, CineComponent, NotFoundComponent, HomeComponent, MusicComponent],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
