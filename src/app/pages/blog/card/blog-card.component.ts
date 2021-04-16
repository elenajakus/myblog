import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from './../../../shared/models/blog.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog = {} as any;
  @Input() hasAction = true;
  @Output() callFav = new EventEmitter<Blog>();
  @Output() getBlog = new EventEmitter<Blog>();
  /* itt egy egesz blogot adok vissza neki */

  constructor() { }

  ngOnInit(): void {
  }
  toggleStar(event: any): void {
    event.stopPropagation();
    /* kivedi a dubble effectet */
    this.blog.star = !this.blog.star;
    this.callFav.emit(this.blog);
  }

}
