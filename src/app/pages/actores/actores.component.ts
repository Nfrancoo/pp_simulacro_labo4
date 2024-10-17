import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from '../../interfaces/actor.interface';
import { ActorService } from '../../service/actores.service';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { PeliculasActorComponent } from './peliculas-actor/peliculas-actor.component';
import { Pelicula } from '../../interfaces/pelicula.interface';


@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [ListadoActoresComponent, DetalleActorComponent, DetallePaisComponent, PeliculasActorComponent],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css'
})

export class ActoresComponent {
  actorSeleccionado: Actor | null = null;
  peliculasActor: Pelicula[] = [];

  constructor(private actorService: ActorService) {}

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado = actor;
    this.cargarPeliculasDelActor(actor);
  }

  cargarPeliculasDelActor(actor: Actor) {
    // Aquí llamas a tu servicio para obtener las películas del actor
    // Por ejemplo: this.peliculasActor = this.peliculasService.obtenerPeliculasPorActor(actor);
  }
}
