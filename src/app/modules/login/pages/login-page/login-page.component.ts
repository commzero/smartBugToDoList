import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/http/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  message: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initLoginForm();
    console.log(this.loginForm);
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.loginService.onLogin(this.loginForm.value).subscribe(logged => {
      console.log(logged);
      if (logged.length === 1) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', logged[0].token);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/']);
      } else {
        localStorage.setItem('loggedIn', 'false');
        this.message = 'Username / Password is invalid';
      }
    }, err => {
      console.log(err);
    })
  }

}
