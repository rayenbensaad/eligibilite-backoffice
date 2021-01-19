import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'app/service/form.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  currentForm = null;
  message = '';

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.message = '';
      this.getForm(this.route.snapshot.paramMap.get('id'));
    }
  
    getForm(id) {
      this.formService.get(id)
        .subscribe(
          data => {
            this.currentForm = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
    deleteForm() {
      this.formService.delete(this.currentForm.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/listForm']);
          },
          error => {
            console.log(error);
          });
    }
  }