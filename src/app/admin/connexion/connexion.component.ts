import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  back:any = "./assets/logo.jpg";
  constructor(private sAuth : AuthService) { }

  ngOnInit(): void {
  }
  seConnecter (l,m)
  {  
     //console.log(l+ ' ' + m);
     this.sAuth.seConnecter(l,m);
  }
}
