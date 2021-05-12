import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  postId: string;
  post: any;
  commentText = '';

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  createComment(): any {
    console.log('component: ', this.post, this.commentText);
    const newComment = {text: this.commentText};
    this.postService.createComment(this.post, newComment).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {

  }

}
