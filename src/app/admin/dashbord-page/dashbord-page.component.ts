import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interface';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.scss']
})
export class DashbordPageComponent implements OnInit, OnDestroy {
  posts: Post[]= [];
  pSub: Subscription

  constructor(private postsService: PostsService) {

  }
  
  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }

  remove(id: string): void {
    
  }

  ngOnDestroy(): void {
    if(this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
