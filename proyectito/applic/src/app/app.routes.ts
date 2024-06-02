import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RecetasComponent } from './recetas/recetas.component';
import { EspaguettiALaCarbonaraComponent } from './espaguetti-a-la-carbonara/espaguetti-a-la-carbonara.component';
import { LicuadoDeMangoComponent } from './licuado-de-mango/licuado-de-mango.component';
import { PureDePapaComponent } from './pure-de-papa/pure-de-papa.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'recetas', component: RecetasComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'recetas/espaguetti-a-la-carbonara', component: EspaguettiALaCarbonaraComponent},
    {path: 'recetas/licuado-de-mango', component: LicuadoDeMangoComponent},
    {path: 'recetas/pure-de-papa', component: PureDePapaComponent}
    
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
exports: [RouterModule],
})
export class AppRoutingModule{}


