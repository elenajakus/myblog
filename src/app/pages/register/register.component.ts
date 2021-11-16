import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = {name: '', message: ''}; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "Ön sikeresen regisztrált!"
          //this.router.navigate(['/userinfo'])
        }).catch(_error => {
        this.error = _error
        this.router.navigate(['/register'])
      })
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = "Adja meg az email címét.";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Adja meg a jelszavát.";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "A jelszó nem lehet kevesebb 6 karakternél!";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
