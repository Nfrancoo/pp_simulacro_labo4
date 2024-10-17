import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'actores', loadComponent: () => import('./pages/actores/actores.component').then(m => m.ActoresComponent) },
  {path: 'AltaActor', loadComponent: ()=> import('./pages/alto-actor/alto-actor.component').then(m => m.AltoActorComponent)},
  {path: '', loadComponent: ()=> import('./pages/peliculas/peliculas.component').then(m => m.PeliculasComponent)},
  {path: 'peliculas', loadComponent: ()=> import('./pages/peliculas/peliculas.component').then(m => m.PeliculasComponent)},
  {path: 'AltaPelicula', loadComponent: ()=> import('./pages/alta-pelicula/alta-pelicula.component').then(m => m.AltaPeliculaComponent)},




];
