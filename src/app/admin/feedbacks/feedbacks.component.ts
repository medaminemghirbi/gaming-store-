import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ContactusService } from 'src/app/services/contactus.service';
//import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  messages;
  constructor(private contactService: ContactusService,
    public auth : AuthService) { 

  }

  ngOnInit(): void { 
    this.contactService.listeMessage()
    .subscribe(result =>
      {
        this.messages = result;
      })

  }

}
