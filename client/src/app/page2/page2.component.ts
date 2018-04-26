import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  providers: [ContactService],
})
export class Page2Component implements OnInit {
  
  contact: Object = {
    _id: '',
    firstname: '',
    lastName: '',
    phone: '',
  };
  constructor(
    private contactService: ContactService, 
    private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe( params => {
      
      const contactId = params['contactId'];
   
      this.contactService.getContact(contactId).subscribe( contact => 
        this.contact = contact
      );
    });

   
  }

}
