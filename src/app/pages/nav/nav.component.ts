import { Router } from '@angular/router';
import { CATEGORIES } from '../../shared/database/category.database';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BLOGPAGES } from '../../shared/database/blog.database';
import { QUIZPAGES } from '../../shared/database/quiz.database';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  categories = CATEGORIES;
  blogpages = BLOGPAGES;
  quizpages = QUIZPAGES;
  user: any ={}
  constructor(private router: Router,private authService: AuthService) {
   }

   logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  ngOnInit(): void {
    this.authService.getAuth().subscribe((user) =>
        {
          this.user =user
        })
  }
  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
