import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from '../../../interfaces/actor.interface';
import { ActorService } from '../../../service/actores.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css'
})

export class ListadoActoresComponent {
  actores$: Observable<Actor[]>; // Observable que almacena los actores

  @Output() actorSeleccionado = new EventEmitter<Actor>();

  constructor(private actorService: ActorService) {
    // Obtener los actores desde el servicio
    this.actores$ = this.actorService.obtenerActores();
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor); // Emitir el actor seleccionado
  }
}
