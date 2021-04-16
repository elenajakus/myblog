import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss']
})
export class FavouriteCardComponent implements OnInit {
  @Input() favorite: Blog = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
