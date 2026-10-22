import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"
import { HomeComponent } from "./components/home-component/home-component"
import { CineComponent } from "./components/cine-component/cine-component"
import { MusicComponent } from "./components/music-component/music-component"
import { NotFoundComponent } from "./components/not-found-component/not-found-component"
import { NumeroDobleComponent } from "./components/numero-doble-component/numero-doble-component"
import { TablaMultiplicarComponent } from "./components/tabla-multiplicar-component/tabla-multiplicar-component"
import { MenuTablaMultiplicar } from "./components/menu-tabla-multiplicar/menu-tabla-multiplicar"

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicComponent}, 
    { path: "doble/:numero", component: NumeroDobleComponent}, 
    { path: "tabla/:numero", component: TablaMultiplicarComponent}, 
    { path: "**", component: NotFoundComponent}
]

export const appRoutingProvider: any[] = []
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes)