import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class Validation {
  nameArr: string[] = ['Anna', 'Maria', 'Orzio'];

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
        value:
          'Nome invalido: Il nome non può contenere numeri o caratteri speciali o essere una stringa vuota, può contenere solo lettere.!',
      },
    ],
  ];

  validName(control: FormControl): { [s: string]: boolean } {
    if (this.nameArr.includes(control.value)) return { nameIsInvalid: true };
    else return null;
  }

  validName2(control: FormControl): { [s: string]: boolean } {
    if (
      !new RegExp('^[a-zA-Z]+$').test(control.value) &&
      control.value !== '' &&
      control.value !== null
    )
      return { nameContainsA: true };
    else return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
