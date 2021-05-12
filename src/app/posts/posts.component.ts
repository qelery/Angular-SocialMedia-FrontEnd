import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public commentText: string;
  public commentDate: Date;
  private postId: string;
  private post: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap
      .subscribe( params => {
        this.postId = params.get('id');
        this.postService.getPost(this.postId).subscribe(response => {
          this.post = response;
          console.log(this.post);
        });
      });
  }



}
