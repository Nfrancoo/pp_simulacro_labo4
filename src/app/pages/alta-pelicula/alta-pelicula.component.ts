import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Actor } from '../../interfaces/actor.interface';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaActoresComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css'
})
export class AltaPeliculaComponent {
  pelicula: Pelicula = {
    id: '',
    nombre: '',
    tipo: 'otros',
    fechaEstreno: new Date(),
    cantidadPublico: 0,
    foto: '',
    protagonista: ''
  };

  constructor(private peliculasService: PeliculasService) {}

  actualizarProtagonista(actor: Actor) {
    this.pelicula.protagonista = `${actor.nombre} ${actor.apellido}`;
  }

  guardarPelicula() {
    this.peliculasService.agregarPelicula(this.pelicula);
    console.log('Película guardada:', this.pelicula);
    this.resetFormulario();
  }

  resetFormulario() {
    this.pelicula = {
      id: '',
      nombre: '',
      tipo: 'otros',
      fechaEstreno: new Date(),
      cantidadPublico: 0,
      foto: '',
      protagonista: ''
    };
  }
}
