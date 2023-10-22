import { Component, OnInit } from '@angular/core';
import { FotografiasServicesService } from '../../services/fotografias-services.service';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from 'src/app/interfaces/IPhoto';

@Component({
  selector: 'app-foto-detalle',
  templateUrl: './foto-detalle.component.html',
  styleUrls: ['./foto-detalle.component.scss']
})
export class FotoDetalleComponent implements OnInit{

  public datoFoto!: IPhoto;

  constructor(private dataFotografias: FotografiasServicesService,
              private activateRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getPhotoById();
  }

  getPhotoById(){
    this.activateRouter.paramMap.subscribe( parametro => {
      let id = Number(parametro.get('id'));
      this.dataFotografias.getId(id).subscribe( datos => this.datoFoto = datos);
    })
  }
}
