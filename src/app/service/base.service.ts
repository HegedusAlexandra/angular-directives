import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


export class BaseService<T extends { id: number }> {
  private readonly http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  one$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  private readonly actions: { [k: string]: Function } = {
    getAll: () => this.getAll().subscribe((list) => this.list$.next(list)),

    get: (id: number) => this.get(id).subscribe((one) => this.one$.next(one)),

    create: (entity: T) =>
      this.create(entity).subscribe(() => this.actions['getAll']()),

    update: (entity: T) =>
      this.update(entity).subscribe((updated) => {
        const list = this.list$.getValue();
        const index = list.findIndex((i) => i.id === updated.id);
        list.splice(index, 1, updated);
        this.list$.next(list);
      }),

    delete: (entity: T) =>
      this.delete(entity).subscribe(() => {
        const list = this.list$.getValue();
        const index = list.findIndex((i) => i.id === entity.id);
        list.splice(index, 1);
        this.list$.next(list);
      }),
  };

  constructor(protected entity: string) {
    this.http
      .get(`http://localhost:3000/tickets`)
      .subscribe();
  }

  dispatch(actionName: string, ...args: any[]): void {
    this.actions[actionName](...args);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entity}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entity}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entity}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entity}/${entity.id}`,
      entity
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entity}/${entity.id}`);
  }
}
