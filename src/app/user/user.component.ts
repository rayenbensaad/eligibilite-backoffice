import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
  };
  confirmPassword = '';
  showNewPasswordInput = false;
  constructor(private authService: AuthService) { }

  currentUser;
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser = data;
    //console.log(this.currentUser.user)
  }


  updatePassword(oldPass) {

    //console.log(oldPass)
    const data = {
      password: oldPass,
      newPassword: this.user.password,
    }
    console.log(data)
    this.authService.update(this.currentUser.user.id, data)
      .subscribe(
        response => {
         // console.log(response);

          //console.log(data);
          this.showNewPasswordInput = false;
        },
        error => {
          console.log(error);
        });
  }



  showInput(password) {
    this.user = {
      username: this.currentUser.user.username,
      email: this.currentUser.user.email,
      password: password,
    }
   // console.log(this.user)
    this.showNewPasswordInput = true;
  }

  cancel() {
    this.showNewPasswordInput = false;
  }

}
