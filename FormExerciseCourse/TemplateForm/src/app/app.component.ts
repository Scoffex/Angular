import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{

  arrayOfGender: string[] = ['Male', 'Female', 'Other'];
  @ViewChild('form', {static: false}) form: NgForm;
  validForm: boolean = false;
  question = '';
  checkedGender = 'Male';
  defaultValue = 'pet';
  isSubmitted: boolean = false;
  usernameSelected: string;
  emailSelected: string;
  genderSelected: string;
  secret: string;
  questionSelected: string;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    /*  console.log(this.form.form)
     this.form.form.patchValue({
      gender: 'Other'
     }) */
   }
  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.form.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      question: '',
      gender: 'Male'
    }) */
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  
  subitForm() {
    console.log(this.form.value)
    console.log(this.form)
    this.validForm = this.form.valid;
    this.usernameSelected = this.form.value.userData.username
    this.emailSelected = this.form.value.userData.email
    this.genderSelected = this.form.value.gender
    this.secret = this.form.value.secret
    this.questionSelected = this.form.value.question
    this.isSubmitted = true;
    this.form.reset();
  }
}


