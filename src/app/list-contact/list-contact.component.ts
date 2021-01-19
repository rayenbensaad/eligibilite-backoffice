import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/service/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contacts: any;
  currentContact = null;
  currentIndex = -1;
  nom_prenom = '';
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.retrieveContact();
  }
  retrieveContact() {
    this.contactService.getAll()
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveContact();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  setActiveContact(contact, index) {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  removeAllContacts() {
    this.contactService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
