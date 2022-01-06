import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connecte : boolean = false;
  constructor( private router: Router) { }
  
  seConnecter (l,m)
  {
    if (l=="admin" && m =="admin")
    {
      this.connecte=true ;
     
      this.router.navigate(['/dashbord']);
   
    }else
    { 
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  sedeConnecter ()
  {
    this.connecte=false ;
   
  } 
}
