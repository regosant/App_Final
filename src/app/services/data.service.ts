import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../pages/components/interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
              .pipe(
                delay( 1500 )
              );
  }

}