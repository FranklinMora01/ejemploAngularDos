import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users!: IUser[];

  constructor (private dataService: DataService){

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dataService.getUsers().subscribe( usuarios => this.users = usuarios);
  }

}
