import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users;
  constructor(private fb : UsersService,private router : Router ,public auth: AuthService) { }

  ngOnInit(): void {
    this.fb.getUsers()
    .subscribe(result=>{
      this.users = result;
    })
  }

}
