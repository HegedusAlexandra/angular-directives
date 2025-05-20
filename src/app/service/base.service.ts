import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly http: HttpClient = inject(HttpClient)

  constructor() {
    this.http.get(`http://localhost:3000/tickets`).subscribe(
      tickets => console.log(tickets)       
    );
   }
}
