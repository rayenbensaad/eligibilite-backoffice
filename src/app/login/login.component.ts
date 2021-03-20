import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  user = {
    username: '',
    password: '',
    email:'',
  };
  submitted = false;
  submitEmail = '';
  btnForgetPswd = false;

  ngOnInit(): void {
  }


  login() {


    const data = {
      username: this.user.username,
      password: this.user.password,

    };

    console.log(data);
    this.authService.login(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          localStorage.setItem("user", JSON.stringify(response));
          let data = JSON.parse(localStorage.getItem("user"));
          console.log(data);
          this.router.navigate(['/listArticle']);
        },
        error => {
          console.log(error);
        });
  }


  forgetPassword() {
    this.btnForgetPswd = true;
  }

  annuler(){
    this.btnForgetPswd = false;
  }

  envoyer(){
    
    const data = {
      email: this.user.email,
    };

    console.log(data);
    this.authService.forgetPassword(data)
      .subscribe(
        response => { 
          this.btnForgetPswd = false;
        },
        error => {
          console.log(error);
          this.submitEmail= "Email n'est pas valide";

        });
  }
}