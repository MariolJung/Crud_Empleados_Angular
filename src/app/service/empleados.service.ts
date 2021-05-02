import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(empleado: any): Promise<any>{

    return this.firestore.collection('empleado').add(empleado);
  }
  getEmpleados(): Observable<any> {
    return this.firestore.collection('empleado', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarEmpleado(id: string): Promise<any> {
    return this.firestore.collection('empleado').doc(id).delete();
  }
  getEmpleado(id: string): Observable<any> {
    return this.firestore.collection('empleado').doc(id).snapshotChanges();
  }
  actualizarEmpleado(id: string, data: any): Promise<any>{
    return this.firestore.collection('empleado').doc(id).update(data);
  }
}
