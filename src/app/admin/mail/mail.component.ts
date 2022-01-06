import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';
import Swal from 'sweetalert2';
import { ContactusService } from 'src/app/services/contactus.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(private router: Router,
    private produitService: ContactusService,
    public auth : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: { value: { [x: string]: any; }; }){
  
    let x : Contact ={ Email : f.value['Email'],Text:f.value['Text']};
    this.produitService.ajouterMessage(x)
    .then(    
      res=>{
        Swal.fire({
          title: 'Message Envoyé Avec Succé .',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      this.router.navigate(['/dashbord']);
      }
    );
  }
}
