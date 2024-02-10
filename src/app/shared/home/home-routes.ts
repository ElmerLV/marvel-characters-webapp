import { Routes } from '@angular/router';
import { BitacoraComponent } from 'src/app/component/bitacora/bitacora.component';
import { CharacterComponent } from 'src/app/component/character/character.component';

export const HomeRoutes: Routes = [
    { path: '', component: CharacterComponent },
    { path: 'menu/personajes', component: CharacterComponent },
    { path: 'menu/bitacora', component: BitacoraComponent },
];
