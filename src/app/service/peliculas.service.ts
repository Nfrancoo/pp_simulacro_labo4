import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { addDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, DocumentReference, getDocs, query, QueryDocumentSnapshot, where } from 'firebase/firestore';
import { collection } from '@angular/fire/firestore';
import { FirestoreDataConverter } from 'firebase/firestore'; // Asegúrate de importar esto

@Injectable({
  providedIn: 'root'
})


export class PeliculasService {

  private peliculasCollection: CollectionReference<Pelicula>;

  // Define el convertidor para la colección de películas
  peliculaConverter: FirestoreDataConverter<Pelicula> = {
    toFirestore(pelicula: Pelicula): DocumentData {
      return { ...pelicula }; // Convierte a Firestore
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Pelicula {
      const data = snapshot.data();
      return { id: snapshot.id, ...data } as Pelicula; // Convierte de Firestore
    }
  };

  constructor(private firestore: Firestore) { // Cambia AngularFirestore a Firestore
    this.peliculasCollection = collection(this.firestore, 'peliculas').withConverter<Pelicula>(this.peliculaConverter); // Especifica el tipo aquí
  }

  agregarPelicula(pelicula: Pelicula) {
    return addDoc(this.peliculasCollection, pelicula); // Cambia 'this.firestore.collection' a 'addDoc' con 'peliculasCollection'
  }

  async obtenerPeliculas(): Promise<Pelicula[]> {
    const peliculasSnapshot = await getDocs(this.peliculasCollection);
    return peliculasSnapshot.docs.map(doc => {
      const data = doc.data() as Pelicula; // Obtén los datos como Pelicula
      return { ...data, id: doc.id }; // Asegúrate de que 'id' no se repita
    });
  }

  obtenerPeliculasPorProtagonista(protagonista: string): Observable<Pelicula[]> {
    return new Observable<Pelicula[]>(observer => {
      const q = query(this.peliculasCollection, where('protagonista', '==', protagonista)); // Filtra por el campo 'protagonista'

      getDocs(q).then(snapshot => {
        const peliculas = snapshot.docs.map(doc => {
          const data = doc.data() as Omit<Pelicula, 'id'>;
          const id = doc.id;
          return { id, ...data }; // Combina los datos con el ID
        });
        observer.next(peliculas); // Envía los resultados
        observer.complete(); // Completa el observable
      }).catch(error => {
        observer.error(error); // Maneja los errores
      });
    });
  }
}

