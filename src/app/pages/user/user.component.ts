import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { catchError, throwError } from 'rxjs';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  public errorMessage: string = '';
  public user!: IUser;

  constructor(private dataServices: DataService, 
    private activateRoute: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    this.getUserById();
  }


  getUserById() {
    this.activateRoute.paramMap.subscribe( parametro => {
      //capturamos el parametro de la URL
      console.log(parametro);
      let id = Number(parametro.get('id'));
      //console.log(id)
      //console.log(typeof id);
      this.dataServices.getUserById(id).pipe(
        catchError( (error) => {
        //console.log(error);
        const {status, message} = error;
        this.errorMessage = message;
        return throwError( () => new Error(this.errorMessage));
      })
      ).subscribe( (user) => this.user = user);
    })
  }

}
