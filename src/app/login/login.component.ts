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
  };
  submitted = false;


  ngOnInit(): void {
  }


  login() {
    
    
    const data = {
      username: this.user.username,
      password: this.user.password,

    };

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
}
