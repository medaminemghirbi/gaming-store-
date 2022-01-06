import { Contact } from 'src/app/model/contact.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactusService } from 'src/app/services/contactus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router,
    private cs: ContactusService) { }

  ngOnInit(): void { 
  }
  onSubmit(f: { value: { [x: string]: any; }; }){
  
    let x : Contact ={ Email : f.value['Email'],Text:f.value['Text']};
    this.cs.ajouterMessage(x)
 
   .then(    
      res=>{
        Swal.fire('Whooa!', 'Messsage Envoyé" Avec Succé!', 'success')
      this.router.navigate(['']);
      }
    );
  }
}

