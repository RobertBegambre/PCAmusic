import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
      image:"https://i.ytimg.com/vi/DYdmjPKoUz8/maxresdefault.jpg",
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
      image:"https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpghttps://media.istockphoto.com/id/146760417/es/foto/suite-tipo-estudio-de-grabaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=bOqpBBii4hQ6-P0xRjP2szE9hpdvgl0ZzdniMsOfjIM=",
      description:"descripcion"
    }
,
    {
      title:"titulo del slide 4",
      icon:"diamond-outline",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&s",
      image:"https://png.pngtree.com/png-clipart/20230915/original/pngtree-treble-clef-icon-music-sign-sound-sign-entertainment-vector-png-image_12175313.png",
      description:"descripcion"
    }
  ]

  constructor(private router:Router) { }

  close(){
    //console.log("estoy intentando cerrar la intro")

    this.router.navigateByUrl("/home")
  }

  ngOnInit(){

  }

}
