import { NgFor } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importamos HttpClientModule
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [HttpClientModule, NgFor], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  paises: any[] = [];
  @Output() onPaisSeleccionado = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data: any) => {
      this.paises = data;
      this.ordenarPaises();
    });
  }

  seleccionarPais(pais: string) {
    this.onPaisSeleccionado.emit(pais);
  }

  ordenarPaises() {
    this.paises.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
}
