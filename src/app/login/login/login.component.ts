import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, filter, interval, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

  }

  loginForm!: FormGroup;


  get useEmail() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get isEmailInvalid() {
    return !this.useEmail?.valid && this.useEmail?.touched
  }

  get isPasswordinValid() {
    return !this.password?.valid && this.password?.touched
  }

  ngOnInit(): void {

    this.loginService.currentLoginStatus$.pipe(
      filter(status => !!status),
      tap(() => this.router.navigateByUrl('/')),
    ).subscribe();

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.loginService.userLogin(email, password)
  }

}
