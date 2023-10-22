import { Component, OnInit } from '@angular/core';
import { FotografiasServicesService } from '../../services/fotografias-services.service';
import { IPhoto } from '../../interfaces/IPhoto';

@Component({
  selector: 'app-contenedor-fotografias',
  templateUrl: './contenedor-fotografias.component.html',
  styleUrls: ['./contenedor-fotografias.component.scss']
})
export class ContenedorFotografiasComponent implements OnInit{

  public photos: IPhoto[] = [];

  constructor(private dataFotografias: FotografiasServicesService){

  }
  ngOnInit(): void {
    this.dataFotografias.getPhoto().subscribe( photos => this.photos = photos);
  }


}
