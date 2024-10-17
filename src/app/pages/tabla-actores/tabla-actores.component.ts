import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from '../../interfaces/actor.interface';
import { NgFor } from '@angular/common';
import { ActorService } from '../../service/actores.service';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})

export class TablaActoresComponent {

  @Output() onActorSeleccionado = new EventEmitter<Actor>(); // Emitir el actor seleccionado

  actores: Actor[] = []; // Inicializamos la lista de actores vacía

  constructor(private actorService: ActorService) {
    // Suscribirse al observable que trae los actores desde Firestore
    this.actorService.obtenerActores().subscribe((actores: Actor[]) => {
      this.actores = actores; // Asignar los actores obtenidos a la lista
    });
  }

  seleccionarActor(actor: Actor) {
    this.onActorSeleccionado.emit(actor); // Emitir el actor seleccionado
  }
}
