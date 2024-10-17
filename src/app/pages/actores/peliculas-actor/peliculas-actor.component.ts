import { Component, Input, OnChanges } from '@angular/core';
import { PeliculasService } from '../../../service/peliculas.service';
import { Observable } from 'rxjs';
import { Pelicula } from '../../../interfaces/pelicula.interface';
import { CommonModule } from '@angular/common';
import { Actor } from '../../../interfaces/actor.interface';

@Component({
  selector: 'app-peliculas-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas-actor.component.html',
  styleUrl: './peliculas-actor.component.css'
})


export class PeliculasActorComponent implements OnChanges {
  @Input() actor: Actor | null = null; // El actor seleccionado
  peliculas$: Observable<Pelicula[]> | null = null; // Observable que contendrá las películas del actor

  constructor(private peliculasService: PeliculasService) {}

  ngOnChanges() {
    if (this.actor) {
      // Combina el nombre y apellido del actor para buscar las películas
      const nombreCompleto = `${this.actor.nombre} ${this.actor.apellido}`;
      this.peliculas$ = this.peliculasService.obtenerPeliculasPorProtagonista(nombreCompleto);
    }
  }
}
