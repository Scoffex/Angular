import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Validation } from './angular.validation/form.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  nameArr: string[] = ['Anna', 'Maria', 'Orzio'];
  errorRender: string = '';
  validation: Validation;

  ngOnInit(): void {
  
    this.form = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.validation.validName.bind(this), this.validation.validName2.bind(this),]),
        email: new FormControl(null, [Validators.required, Validators.email], this.validation.forbiddenEmail),
      }),
      hobbies: new FormArray([]),
      gender: new FormControl('male', Validators.required),
    });
    this.form.valueChanges.subscribe((v) => console.log(v));
    this.form.statusChanges.subscribe((v) => console.log(v));
  }

  error = [
    [
      {
        error: 'required',
        value: 'Inserisci un valore valido!',
      },
      {
        error: 'nameIsInvalid',
        value: 'Questo nome non è selezionabile!',
      },
      {
        error: 'nameContainsA',
        value: 'Nome invalido: Il nome non può contenere numeri o caratteri speciali o essere una stringa vuota, può contenere solo lettere.!',
      },
    ],
  ];

  constructor(){
    this.validation = new Validation();
  }
  onSubmit() {
    console.log(this.form);
  }

  //-----------------------------------------------------------------------------------------------------------------------------
  addHobbie() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  getHobbies() {
    return (<FormArray>this.form.get('hobbies')).controls;
  }

  searchIndex(index: number) {
    if (
      this.form.get('hobbies').value[index] === null ||
      this.form.get('hobbies').value[index] === ''
    )
      return true;
    else return false;
  }
  //-----------------------------------------------------------------------------------------------------------------------------


  printError(event: any, index: number) {
    console.log(this.form)
    let errArr: string[] = [];
    /*  this.errorsUser[index].forEach(user => {
      for (let key of Object.keys(event.errors)) {
        if (user.error === key && !errArr.includes(user.value)) {
              errArr.push(user.value);
        }
      } 
       });
       */
    this.error[index]
      .filter(
        (arrayError) => event.errors[arrayError.error] && !errArr.includes(arrayError.value)
      )
      .forEach((arrayError) => errArr.push(arrayError.value));
    return errArr;
  }

  //-----------------------------------------------------------------------------------------------------------------------------

}
