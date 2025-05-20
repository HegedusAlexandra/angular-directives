import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  private readonly http: HttpClient = inject(HttpClient)

  apiUrl: string = environment.apiUrl

  constructor(
    @Inject(String) protected entity: string,
  ) {
    this.http.get(`http://localhost:3000/tickets`).subscribe(
      tickets => console.log(tickets)       
    );
   }

  getAll(): Observable<T[]>{
    return this.http.get<T[]>(`${this.apiUrl}${this.entity}`)
  }

  get(id:number): Observable<T>{
    return this.http.get<T>(`${this.apiUrl}${this.entity}/${id}`)
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entity}`, entity);
  }
  
}
