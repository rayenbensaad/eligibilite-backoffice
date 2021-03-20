import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  showNewPasswordInput2 = false;
  constructor(private authService: AuthService,private router: Router) { }

  currentUser;
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser = data;
    this.user.email=this.currentUser.user.email;
    console.log(this.currentUser.user)
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
          localStorage.clear();
          this.router.navigate(['/login']);
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

  showInput2(password) {

    console.log(password);
    this.showNewPasswordInput2 = true;
  }
  cancel2() {
    this.showNewPasswordInput2 = false;
  }

  updateEmail(confirmPassword) {

    console.log(confirmPassword);
    console.log(this.user.email);

    const data = {
      password: confirmPassword,
      email: this.user.email,
    }
    console.log(data)
    this.authService.updateEmail(this.currentUser.user.id, data)
      .subscribe(
        response => {
          localStorage.clear();
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        });
  }

}
