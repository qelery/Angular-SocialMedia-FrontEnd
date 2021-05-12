import {Component, OnInit} from '@angular/core';
import { PostService } from '../services/post/post.service';
import {CommentService} from '../services/comment/comment.service';
import {Router} from '@angular/router';
declare const M;

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public posts: any[];
  public comments: any[] = [];
  public username: string;
  public postTitle: string;
  public postContent: string;
  public postDate: Date;
  public commentText: string;


  constructor(private postService: PostService, private commentService: CommentService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    }, err => console.log(err));
  }

  fromChild(): void {
    this.getPosts();
  }

  createPost(): any {
    const newPost = {
      title: this.postTitle,
      content: this.postContent,
    };
    this.postService.createPost(newPost).subscribe(response => {
      this.posts = [...this.posts, response];
    }, err => console.log(err));
  }



  createComment(post): any {
    console.log('component: ', post, this.commentText);
    const newComment = { text: this.commentText};
    this.commentService.createComment(post, newComment).subscribe(response => {
      console.log(response);
      this.getPosts();
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getPosts();
    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your posts</span>';
      M.toast({html: toastHTML});
    }
  }

  deletePost(post: any): void {
    this.postService.deletePost(post.id).subscribe();
  }

  deleteComment(post, comment): void {
    this.postService.deleteComment(post, comment.id).subscribe();
  }
}
