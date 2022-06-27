# Mediatec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Json Server
Pour ajouter cette dependance,on lance la commande ` npm i json-server`
On cree un dossier db et dedans on met un fichier `db.json` qui va contenir les donnees sous forme d'objet JSON
On va dans le fichier ``package.json`` on ajoute

"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    ``"start:db": "json-server --watch db/db.json "``
  }

  ### Pour lancer le serveur

  Terminal `npm run start:db`

  # Creation des services

  Pour creer un service,on lance la commande `ng g s services/nom_du_service`

  # Creation des composants

    Pour creer un composant,on lance la commande `ng g c nom_du_composant`
  # Creation de Models

  # Récuperation des donnees sur le serveur json

  On importe le module HttpClientModule de le fichier module.ts

  On importe Httpclient dans le service.ts 


  
  constructor(private http :HttpClient) { }

    public findAll(){
    return this.http.get<FilmsModel[]>(url)

  }

  # Recuperation des donnees dans un composant dans

  On cree un attribut de type du service dans le constructeur
  a fin qu' on puisse appeler la methode qui recuper les donnees.
  on s'abonnent  pour stocker les donnees dans un tableau 

  constructor(private service :  FilmHttpService){
    this.service.findAll()
    .subscribe((data)=>this.filmsarray = data);
    }

