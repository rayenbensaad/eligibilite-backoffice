import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { ModalService } from 'app/_modal';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsletter: any;
  currentIndex = -1;
  currentUser;
  constructor(private contactService: ContactService,
    private router: Router ,private modalService: ModalService) { }

  ngOnInit(): void {
    this.retrieveForms();
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser=data;
    if(this.currentUser ==null){
      this.router.navigate(['/']);
    }
  }


  retrieveForms() {
    this.contactService.getAllNewsletter()
      .subscribe(
        data => {
          this.newsletter = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveForms();
    this.contactService = null;
    this.currentIndex = -1;
  }





  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
