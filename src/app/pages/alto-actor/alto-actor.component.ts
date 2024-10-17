import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Actor } from '../../interfaces/actor.interface';
import { NgFor } from '@angular/common';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { ActorService } from '../../service/actores.service';

@Component({
  selector: 'app-alto-actor',
  standalone: true,
  imports: [FormsModule, NgFor, TablaPaisesComponent],
  templateUrl: './alto-actor.component.html',
  styleUrl: './alto-actor.component.css'
})
export class AltoActorComponent {
  actor: Actor = {id:'', nombre: '', apellido: '', documento: '', edad: 0, pais: '' };

  constructor(private actorService: ActorService) {}

  formatearDocumento(event: any) {
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length > 2) {
      valor = valor.slice(0, 2) + '-' + valor.slice(2);
    }

    if (valor.length > 6) {
      valor = valor.slice(0, 6) + '-' + valor.slice(6);
    }

    if (valor.length > 10) {
      valor = valor.slice(0, 10);
    }

    event.target.value = valor;
    this.actor.documento = valor;
  }

  // Método que recibe el país seleccionado desde el hijo
  actualizarPaisSeleccionado(pais: string) {
    this.actor.pais = pais;
  }

  guardarActor() {
    // Usar el servicio para guardar el actor en Firestore
    this.actorService.agregarActor(this.actor).subscribe(() => {
      console.log('Actor guardado en Firestore:', this.actor);
      // Puedes resetear el formulario aquí si lo deseas
    });
  }
}
