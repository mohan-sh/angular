import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactDetails } from './contact-details'; // Assuming you have a model for contact details

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }

  getContactDetails(): Observable<ContactDetails> {
    // Simulated data, replace with actual implementation to fetch contact details
    const contactDetails: ContactDetails = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, Country'
    };
    return of(contactDetails);
  }
}
