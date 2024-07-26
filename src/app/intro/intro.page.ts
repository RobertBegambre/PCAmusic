import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      Title: "titulo de slide 1",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion",
    }
,
    {
      Title: "titulo de slide 2",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion hola hola",
    }
,

    {
      Title: "titulo de slide 3",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion  hola ultimo slide",
    }
  ]

  constructor() { }

  close(){

  }

  ngOnInit() {
  }

}
