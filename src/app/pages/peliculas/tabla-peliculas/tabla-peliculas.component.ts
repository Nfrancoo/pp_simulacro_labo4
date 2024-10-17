import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../../interfaces/pelicula.interface';
import { CommonModule, NgFor } from '@angular/common';
import { PeliculasService } from '../../../service/peliculas.service';

@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})

export class TablaPeliculasComponent {

  peliculas: Pelicula[] = [];

  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  constructor(private peliculasService: PeliculasService) {
    // Suscribirse al observable que devuelve las películas
    this.peliculasService.obtenerPeliculas().then((peliculas: Pelicula[]) => {
      this.peliculas = peliculas; // Asignar el array de películas recibido
    });
  }
  seleccionar(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }

  cargarPelicula(pelicula: Pelicula) {
    this.peliculasService.agregarPelicula(pelicula);
  }
}
