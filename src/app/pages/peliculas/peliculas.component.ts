import { Component, Input, input } from '@angular/core';
import { TablaPeliculasComponent } from './tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  peliculaSeleccionada: Pelicula | null = null;

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
