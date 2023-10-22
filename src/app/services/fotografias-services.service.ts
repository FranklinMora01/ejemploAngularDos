import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class FotografiasServicesService {

  constructor(private http: HttpClient) { 

  }

  getPhoto():Observable<IPhoto[]>{
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos');
  }
 
  getId(id: Number){
    return this.http.get<IPhoto>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

}
