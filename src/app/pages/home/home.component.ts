import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from 'src/app/interfaces/IPost';
import { IComent } from 'src/app/interfaces/IComent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
//propiedades
  public posts: IPost [] = [];
  public coments: IComent [] = [];
  public comentariosFiltradosPorPost: IComent[] = [];

  //constrcutor
  constructor(private dataService: DataService) {

  }
  //ciclo de vida de angular
  ngOnInit(): void {
    this.dataService.getPosts().subscribe( (data) => this.posts = data);
    this.dataService.getComments().subscribe( (comentarios) => this.coments = comentarios);
    
  }

//Metodo que permita filtrar
//recivimos por parametro el id del posts y necesitamos obtener los comentarios
// ckick en el boton ver comentarios Post con id
obtenerComentariosPorId(id: number) {
  this.comentariosFiltradosPorPost = this.coments.filter( comentarios => comentarios.postId == id);
  console.log(this.comentariosFiltradosPorPost);
}

}
