import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsModel } from 'src/app/models/films.model';
import { FilmHttpService } from 'src/app/services/film-http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    


  id?: any;
  
  datas :any[]=[];
  datas2 :any[]=[];
  d! :any;

  constructor(private route :ActivatedRoute, private router : Router,public  service :  FilmHttpService) {
    this.service.findAll().subscribe((data)=>this.datas = data);
    this.service.findAllAlbums().subscribe((data)=>this.datas2 = data);

   }

  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id');
    this.id=parseInt(this.id)
  }

  public  finId():number {
    return this.id
  }

}
