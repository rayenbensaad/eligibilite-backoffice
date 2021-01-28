import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { ModalService } from 'app/_modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    username: '',
    email:'',
    password: '',
  };
  submitted = false;

  constructor(private authService: AuthService,private router: Router ,private modalService: ModalService) { }

  currentUser;
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser = data;
    console.log(this.currentUser.user)
  }
 

  updatePassword(oldPass) {
    
console.log(this.user)
const data={
  password:oldPass,
  newPassword: this.user.password,
}
console.log(data)
    this.authService.update(this.currentUser.user.id,data)
      .subscribe(
        response => {
          console.log(response);
         
          console.log(data);
          this.submitted=true;
          //this.router.navigate(['/listArticle']);
        },
        error => {
          console.log(error);
        });
  }

openModal(id: string,password) {
  this.user={
    username:this.currentUser.user.username,
    email:this.currentUser.user.email,
    password:password,
  }
    console.log(this.user)
    
    this.modalService.open(id);
}
closeModal(id: string) {
    this.modalService.close(id);
}

}
