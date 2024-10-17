export interface Pelicula {
  id: string;
  nombre: string;
  tipo: 'terror'| 'comedia'| 'amor'| 'otros';
  fechaEstreno: Date;
  cantidadPublico: number;
  foto: string;
  protagonista: string;
}
