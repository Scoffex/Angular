import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponent implements OnInit {
  isValid: boolean = false;
  formLogin: FormGroup;
  isLoginMode: boolean = true;
  isLogging: boolean = false;
  error: string = null;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
    this.formLogin.valueChanges.subscribe(() => this.isValid = this.formLogin.valid)
  }

  
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit() {
    this.isLogging = true;
    this.error = null;
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;
    let authObservable: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password)
    }

    authObservable.subscribe({
      next: (data) => {
        console.log(data)
        this.isLogging = false;
      },
      error: (error) => {
        this.error = this.isLoginMode ? 'ERROR IN SIGN-IN: ' : 'ERROR IN SIGN-UP: ';
        console.log(error)
        this.error += error;
        this.isLogging = false;
      }
    });
      this.formLogin.reset;
    }

  }

