import { Component, OnInit } from '@angular/core';
import { FormService } from 'app/service/form.service';

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
  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.retrieveForms();
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

}
