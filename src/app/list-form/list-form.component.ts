import { Component, OnInit } from '@angular/core';
import { FormService } from 'app/service/form.service';
import { ExcelService } from 'app/service/excel.service';
import { Router } from '@angular/router';
import { ModalService } from 'app/_modal';
import jsPDF from 'jspdf';
import * as _html2canvas from "html2canvas";


@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
   html2canvas: any = _html2canvas;

  forms: any;
  currentForm = null;
  currentIndex = -1;
  nom_prenom = '';
  currentUser;
  constructor(private formService: FormService,private excelService:ExcelService,
    private router: Router ,private modalService: ModalService) { }

  ngOnInit(): void {
    this.retrieveForms();
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser=data;
    if(this.currentUser ==null){
      this.router.navigate(['/']);
    }
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.forms, 'formulaire_data');
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
        
        PDF.save('tableau_formulaires.pdf');
    });     
    }
  retrieveForms() {
    this.formService.getAll()
      .subscribe(
        data => {
          this.forms = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveForms();
    this.formService = null;
    this.currentIndex = -1;
  }

  setActiveForm(form, index) {
    this.currentForm = form;
    this.currentIndex = index;
  }

  removeAllForms(id: string) {
    this.formService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
          this.modalService.close(id);
        },
        error => {
          console.log(error);
        });
  }


  deleteForm(id: string) {
    this.formService.delete(this.currentForm.id)
      .subscribe(
        response => {
          console.log(response),
          this.modalService.close(id),
          this.retrieveForms()
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
