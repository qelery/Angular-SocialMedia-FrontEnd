import {Component, Input, OnInit, Output} from '@angular/core';
import {PostService} from "../services/post/post.service";
import {CommentService} from "../services/comment/comment.service";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public posts: any[];
  @Input() public post: any;
  @Output() submittedComment = new EventEmitter();
  public comments: any[] = [];
  public username: string;
  public postTitle: string;
  public postDate: Date;
  public commentText: string;
  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
  }


  deleteComment(post, comment): void {
    this.postService.deleteComment(post, comment.id).subscribe();
  }

  createComment(post): any {
    console.log('component: ', post, this.commentText);
    const newComment = { text: this.commentText};
    this.commentService.createComment(post, newComment).subscribe(response => {
      console.log(response);
      this.callParent();
    }, err => console.log(err));
  }

  callParent(): void {
    this.submittedComment.emit();
  }
}
