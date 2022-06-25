import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsModel } from '../models/films.model';

const url= "http://localhost:4000/films"
@Injectable({
  providedIn: 'root'
})
export class FilmHttpService {

  constructor(private http :HttpClient) { }

  public findAll(){
    return this.http.get<FilmsModel[]>(url)

  }


}
