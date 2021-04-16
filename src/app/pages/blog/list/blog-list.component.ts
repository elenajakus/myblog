import { Router } from '@angular/router';
import { Blog } from './../../../shared/models/blog.model';
import { FbBaseService } from './../../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BLOGPAGES} from '../../../shared/database/blog.database';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  title = 'Blogposztok';
  list: Blog[] = [];

  constructor(private service: FbBaseService<Blog>, private router: Router) {
    console.log('valami');
  }

  ngOnInit(): void {
    this.get();
  }

  // tslint:disable-next-line:typedef
  async get() {
    this.list = BLOGPAGES;
    console.log(this.list);
  }

  onGetBlog(event: Blog): void {
    this.router.navigateByUrl('/details/blog/' + event.id);
  }

}
