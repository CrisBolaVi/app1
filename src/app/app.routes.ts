import { Routes } from '@angular/router';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"listaarticulos",component:ListaArticulosComponent},
    {path:"",component:LoginComponent},
];
