import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
declare const M;

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public posts: [];
  public username: string;
  public title: string;
  public content: string;
  public date: Date;

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getPosts();
    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your posts</span>';
      M.toast({html: toastHTML});
    }
  }
}
