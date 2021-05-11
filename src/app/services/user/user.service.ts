import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'; // ADD THIS
import { Subject } from 'rxjs'; // ADD THIS

const herokuUrl = 'https://social-media-springboot.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;  // ADD THIS
  searchSubject = new Subject();  // ADD THIS

  // INJECT ROUTER
  constructor(private http: HttpClient, private router: Router) { console.log('user service loaded'); }

  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        this.searchSubject.next(user);
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        // if 404 response don't redirect to /socialmedia
        if (response['status'] !== '404') {
          this.router.navigate(['/socialmedia']);
        }
      }, err => console.log(err));
  }

  // ADD THIS
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = '';
    this.router.navigate(['/home']);
  }
}
