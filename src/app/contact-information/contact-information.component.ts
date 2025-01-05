
import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../contact-details';
import { ContactService } from '../contact.service';

@Component({
  standalone:true,
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {
  contactDetails: ContactDetails = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails(): void {
    this.contactService.getContactDetails()
      .subscribe(contactDetails => this.contactDetails = contactDetails);
  }
}

