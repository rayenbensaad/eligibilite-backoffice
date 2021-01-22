import { Component, OnInit } from '@angular/core';
import { FormService } from 'app/service/form.service';
import { ExcelService } from 'app/service/excel.service';
import { Router } from '@angular/router';
import { ModalService } from 'app/_modal';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  forms: any;
  currentForm = null;
  currentIndex = -1;
  nom_prenom = '';
  constructor(private formService: FormService,private excelService:ExcelService,
    private router: Router ,private modalService: ModalService) { }

  ngOnInit(): void {
    this.retrieveForms();
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.forms, 'formulaire_data');
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

  removeAllForms() {
    this.formService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
         
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
