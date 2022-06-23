import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  films:any[] = [
    {
      id:1,
      nom:"La cité de la peur",
      real: "Alain Berbérian",
      synopsis:"Odile Deray, attachée de presse, vient au Festival de Cannes pou",
      annee:1994,
      img:"https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
      details: ""
    },
    {
      id:2,
      nom:"Le parrain",
      real: "Francis Ford Coppola",
      synopsis:"En 1945, à New York, les Corleone sont une de fhsfhhfgfdhfhfsjgfjgfjsgjfsjgfjgffjfjttt",
      annee:1994,
      img:"https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
      details: ""
    },
    {
      id:3,
      nom:"Le parrain",
      real: "Fight Club",
      synopsis:"En 1999, à New York, les Corleone sont une de fhsfhhfgfdhfhfsjgfjgfjsgjfsjgfjgffjfjttt",
      annee:1999,
      img:"https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
      details: ""
    },

  ];

  albums: any[] = [
    {
    id: 4,
    nom: "The Dark Side of the Moon",
    artiste: "Pink Floyd",
    annee: 1973,
    img: "",
    details: ""
    },
    {
      id: 5,
      nom: "Space Oddity",
      artiste: "David Bowie",
      annee: 1969,
      img: "",
      details: ""
      }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
