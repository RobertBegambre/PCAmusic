import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides=[
    {
      title:"titulo del slide 1",
      icon:"diamond-outline",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&s",
      image:"https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpg",
      description:"descripcion"
    }
,
    {
      title:"titulo del slide 2",
      icon:"diamond-outline",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&s",
      image:"https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpg",
      description:"descripcion"
    }
,
    {
      title:"titulo del slide 3",
      icon:"diamond-outline",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&s",
      image:"https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpg",
      description:"descripcion"
    }
,
    {
      title:"titulo del slide 4",
      icon:"diamond-outline",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&s",
      image:"https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpg",
      description:"descripcion"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
