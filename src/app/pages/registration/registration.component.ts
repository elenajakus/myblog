import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {  /* a html-t osszekotom a typescripttel, hogy itt letre hozok egy formot */
  form: FormGroup = new FormGroup({ /*formgroupok csoportositast szolgalnak, formcontol adja  alenyegi reszt*/
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error = false; /* nincs hiba elsonek */

  constructor(private router: Router) { }

  registration(): void {/*regisztracios fuggveny*/
    this.error = false;
    if (this.form.valid) { /*ha valid*/
       if (this.form.value.password1 === this.form.value.password2) {  /*a form erteket form.value-val erem el*/
      console.log(this.form.value);
      this.router.navigateByUrl('/login');
      return;
      }
    }
    this.error = true; /* ha nem valid es nem tortennek meg a feltetelek, akkor error */
  }
}
