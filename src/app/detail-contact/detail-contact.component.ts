import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { ModalService } from 'app/_modal';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  currentContact = null;
  message = '';
  openDialog = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService) { }
    ngOnInit() {
      this.message = '';
      this.getContact(this.route.snapshot.paramMap.get('id'));
    }
  
    getContact(id) {
      this.contactService.get(id)
        .subscribe(
          data => {
            this.currentContact = data;
            console.log(data);
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
    deleteContact() {
      this.contactService.delete(this.currentContact.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/listContact']);
          },
          error => {
            console.log(error);
          });
    }
  }