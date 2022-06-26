import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumsModel } from '../models/albums.model';
import { FilmsModel } from '../models/films.model';

const url= "http://localhost:4000/films"
const url2 = "http://localhost:4000/albums"
@Injectable({
  providedIn: 'root'
})
export class FilmHttpService {

  constructor(private http :HttpClient) { }

  public findAll(){
    return this.http.get<FilmsModel[]>(url)

  }
  public findAllAlbums(){
    return this.http.get<AlbumsModel[]>(url2)
  }


  // public findById(id:number){
  //   return this.http.get<any>(url+"/"+id)

  // }
  // public findByIdAlbum(id:number){
  //   return this.http.get<any>(url+"/"+id)

  // }


}
