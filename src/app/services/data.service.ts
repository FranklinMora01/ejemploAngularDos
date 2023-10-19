import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IComent } from '../interfaces/IComent';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():Observable <IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments():Observable <IComent[]>{
    return this.http.get<IComent[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getUserById(id: number): Observable <IUser> {
    //capturamos el error
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  /**como manejar un error desde el servicio 
   
    getUserById(id: number): Observable <IUser> | Observable<any> {
    //capturamos el error
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/Tusers/${id}`).pipe(catchError( (err) => {
    //se hace un destructure del error
    const {status, message} = err;  
    //imprime el mensaje y estatus del error
    console.error(message);
    console.error(status);
      return err;
    }))
  }
  */

}

