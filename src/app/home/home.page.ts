import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      Title: "titulo de slide 1",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion",
    }

    {
      Title: "titulo de slide 1",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion",
    }


    {
      Title: "titulo de slide 1",
      icon:"diamond-outline",
      avatar:"https://as2.ftcdn.net/v2/jpg/05/79/49/49/1000_F_579494977_SJqiMuqaZX72bNNg1jkfoItRK8miicGQ.jpg",
      imagen:"https://cdn.shopify.com/s/files/1/0268/6861/files/Gran-Danes_grande.jpg?v=1535218743",
      descripcion:"texto de descipcion",
    }

    
  ]
  constructor() {}

}
