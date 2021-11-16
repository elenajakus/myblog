import { BLOGPAGES } from './../../shared/database/blog.database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogpage-selector',
  templateUrl: './blogpage-selector.component.html',
  styleUrls: ['./blogpage-selector.component.scss']
})
export class BlogpageSelectorComponent {
  blogpages = BLOGPAGES;

  constructor() { }
}

