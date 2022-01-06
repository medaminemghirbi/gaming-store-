import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from 'src/app/model/user.model';
import { UserAuthService } from 'src/app/services/user-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor( public UserAuthService:UserAuthService) { }

  ngOnInit(): void {
  }

  /*register(f)
  {
    let x : User = { email : f.value['email'],
password:f.value['password'] };
    console.log(f.value);
    this.sauth.SignUp(x)
    Swal.fire({
      title: 'Veuillez se connécter SVP',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })   

  }*/
  
}

