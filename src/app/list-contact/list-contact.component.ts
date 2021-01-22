import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { ModalService } from 'app/_modal';

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
  constructor(private contactService: ContactService,private router: Router ,private modalService: ModalService) { }

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

  deleteContact(id: string) {
    console.log(this.currentContact.id)
    this.contactService.delete(this.currentContact.id)
      .subscribe(
        response => {
          console.log(response),
          this.modalService.close(id),
          this.retrieveContact()
        },
        error => {
          console.log(error);
        });
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
