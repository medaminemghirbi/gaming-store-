import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from 'src/app/model/user.model';
import { UserAuthService } from 'src/app/services/user-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public UserAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
 // userr:any =[{}];
  /*login(f)
{    
  let y : User = { email : f.value['email'],
password:f.value['password'] };
 var userr = JSON.parse(localStorage.getItem('Users') ||'{}');

 if (userr ==y)
{
  console.log(userr)
  this.router.navigate(['/profil']);
}/*else  
{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wrong Password!',
  //  footer: '<a href="">Why do I have this issue?</a>'
  })
}
}
}*/
}
