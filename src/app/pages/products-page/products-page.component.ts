import { Component, OnInit } from '@angular/core';
import { AlbumsModel } from 'src/app/models/albums.model';
import { FilmsModel } from 'src/app/models/films.model';
import { AlbumHttpService } from 'src/app/services/album-http.service';
import { FilmHttpService } from 'src/app/services/film-http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  filmsarray :FilmsModel[]=[];
  albumsArray :AlbumsModel[]=[];

  

  constructor(private filmservice :  FilmHttpService,private albumservice :  AlbumHttpService){
   

    // this.service.demo().subscribe((data)=>this.title = data[].nom);
  }

  

  ngOnInit(): void {
    this.filmservice.findAll()
    .subscribe((data)=>this.filmsarray = data);
    this.albumservice.findAll().subscribe((data)=>this.albumsArray = data);
  }

  debug(){
    alert(JSON.stringify(this.filmsarray))
  }
}
