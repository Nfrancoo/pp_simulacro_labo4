import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor.interface';
import { Firestore, collection, getDocs, addDoc, CollectionReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actoresCollection: CollectionReference<Actor>;

  constructor(private firestore: Firestore) {
    this.actoresCollection = collection(this.firestore, 'actores') as CollectionReference<Actor>;
  }

  // Método para obtener los actores desde Firestore
  obtenerActores(): Observable<Actor[]> {
    // Usar 'from' para convertir la promesa en un Observable
    return from(getDocs(this.actoresCollection).then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data() as Omit<Actor, 'id'>; // Excluye el campo 'id'
        const id = doc.id;
        return { id, ...data }; // Combina el ID con los datos del actor
      });
    }));
  }

  // Método para agregar un nuevo actor
  agregarActor(actor: Actor) {
    // 'addDoc' para agregar el documento a la colección 'actores'
    return from(addDoc(this.actoresCollection, actor));
  }

}
