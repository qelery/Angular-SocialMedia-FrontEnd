import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PostService} from "../post/post.service";

const herokuUrl = 'https://social-media-springboot.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CommentService{

  constructor(private http: HttpClient, private postService: PostService) { }

  createComment(post, newComment): any {
    console.log('service: ', post, newComment);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/categories/${post.id}/recipes`, newComment, requestOptions);
  }

}
