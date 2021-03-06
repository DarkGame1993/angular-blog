import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interface';
import { PostsService } from 'src/app/shared/posts.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.scss']
})
export class DashbordPageComponent implements OnInit, OnDestroy {
  
  posts: Post[]= [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';

  constructor(
    private postsService: PostsService,
    private alert: AlertService
    ) {

  }
  
  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }

  remove(id: string): void {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      this.alert.danger('Post was delete')
    })
  }

  ngOnDestroy(): void {
    if(this.pSub) {
      this.pSub.unsubscribe();
    }

    if(this.dSub) {
      this.dSub.unsubscribe();
    }
  }

}
