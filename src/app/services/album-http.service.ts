import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsModel } from '../models/albums.model';


const url = "http://localhost:4000/albums"
@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {


  constructor(private http :HttpClient) { }

  public findAll(){
    return this.http.get<AlbumsModel[]>(url)
  }
  finById(id:number):Observable<AlbumsModel>{
    return this.http.get<AlbumsModel>(url+"/"+id)
  }

  finAll():Observable<AlbumsModel[]>{
    return this.http.get<AlbumsModel[]>(url)
  }
  createAlbum(film:AlbumsModel):Observable<AlbumsModel>{
    return this.http.post<AlbumsModel>(url, film)
  }
  UpdateAlbum(film:AlbumsModel):Observable<AlbumsModel>{
    return this.http.put<AlbumsModel>(url+"/"+film.id, film)
  }
  deleteAlbum(id:number):Observable<AlbumsModel>{
    return this.http.delete<AlbumsModel>(url+"/"+id)
  }

}
