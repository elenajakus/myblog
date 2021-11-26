import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { PasswordValidationService } from 'src/app/services/password-validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isValidForm = false;


  constructor(
   
    private formBuilder: FormBuilder,
    private as: AuthService,
    private pvs: PasswordValidationService,
    private router: Router
  ) {

  }

  registerForm = this.formBuilder.group(
    { userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: this.pvs.passwordMatchValidator('password', 'confirmPassword'),
    }
  );
  get userName(): AbstractControl | null {
    return this.registerForm.get('userName');
  }

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  get confirmPassword(): AbstractControl | null {
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit(): void {}



 

  async onSubmit(): Promise<void> {
    if (this.registerForm.valid) {
      this.isValidForm = true;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      try {
        const authResult = await this.as.createNewUser(email, password);
        const user: User = {
          id: authResult.user?.uid,
          userName: this.registerForm.get('userName')?.value,
          email: this.registerForm.get('email')?.value,
          
        };
        await this.as.newUser(user);
        this.router.navigateByUrl('/login');
      } catch (error) {
        this.isValidForm = false;

      }
    }
  }
}
