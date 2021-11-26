import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]> | any;
  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
  delete(id: string) {
    this.postService.delete(id);
  }

}
