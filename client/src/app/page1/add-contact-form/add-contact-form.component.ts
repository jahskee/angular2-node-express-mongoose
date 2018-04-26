import { Component, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
})

export class AddContactFormComponent {
  
  @Output() addContactEvent = new EventEmitter();

  constructor(private contactService: ContactService) { }
  
  clickAddContact(formObj:any):void {
    console.log(formObj);

    const contactObj = {
      firstname: formObj.firstname,
      lastname: formObj.lastname,
      phone: formObj.phone,
    }; 

    this.contactService.createContact(contactObj).subscribe(data => {
      this.addContactEvent.emit();
      console.log('create new contact success!');
    });

    console.log('contact: '+JSON.stringify(contactObj))
  }

}
