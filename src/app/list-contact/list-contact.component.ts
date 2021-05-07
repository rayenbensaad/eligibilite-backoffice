import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { ExcelService } from 'app/service/excel.service';
import { ModalService } from 'app/_modal';
import jsPDF from 'jspdf';
import * as _html2canvas from "html2canvas";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  html2canvas: any = _html2canvas;

  contacts: any;
  currentContact = null;
  currentIndex = -1;
  nom_prenom = '';
  currentUser;
  constructor(private excelService:ExcelService ,private contactService: ContactService,private router: Router ,private modalService: ModalService) { }

  ngOnInit(): void {
    this.retrieveContact();
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser=data;
    if(this.currentUser ==null){
      this.router.navigate(['/']);
    }
  }
  retrieveContact() {
    this.contactService.getAll()
      .subscribe(
        data => {
          this.contacts = data;
          //console.log(data);
        },
        error => {
          //console.log(error);
        });
  }

  refreshList() {
    this.retrieveContact();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    this.html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('tableau_contacts.pdf');
    });     
    }
  setActiveContact(contact, index) {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  removeAllContacts(id: string) {
    this.contactService.deleteAll()
      .subscribe(
        response => {
         // console.log(response);
          this.modalService.close(id);

          this.refreshList();
        },
        error => {
         // console.log(error);
        });
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.contacts, 'contacts_data');
  }
  deleteContact(id: string) {
   // console.log(this.currentContact.id)
    this.contactService.delete(this.currentContact.id)
      .subscribe(
        response => {
         // console.log(response),
          this.modalService.close(id),
          this.retrieveContact()
        },
        error => {
         // console.log(error);
        });
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
