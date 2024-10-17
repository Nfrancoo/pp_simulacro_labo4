import { Component, Input } from '@angular/core';
import { Pelicula } from '../../../interfaces/pelicula.interface';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent {

  @Input() pelicula: Pelicula | null = null;

}
