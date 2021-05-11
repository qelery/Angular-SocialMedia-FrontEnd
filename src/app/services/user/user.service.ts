import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const herokuUrl = 'https://social-media-springboot.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { console.log('user service loaded'); }

  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }
}
