import { Component, OnInit } from '@angular/core';
import { AlbumsModel } from 'src/app/models/albums.model';
import { FilmsModel } from 'src/app/models/films.model';
import { FilmHttpService } from 'src/app/services/film-http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  filmsarray :FilmsModel[]=[];
  albumsArray :AlbumsModel[]=[];

  

  constructor(private service :  FilmHttpService){
    this.service.findAll()
    .subscribe((data)=>this.filmsarray = data);
    this.service.findAllAlbums().subscribe((data)=>this.albumsArray = data);

    // this.service.demo().subscribe((data)=>this.title = data[].nom);
  }

  

  ngOnInit(): void {
  }

  debug(){
    alert(JSON.stringify(this.filmsarray))
  }
}
