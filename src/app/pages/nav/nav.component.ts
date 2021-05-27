import { Router } from '@angular/router';
import { CATEGORIES } from '../../shared/database/category.database';
import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories = CATEGORIES;

  constructor(private router: Router, private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
