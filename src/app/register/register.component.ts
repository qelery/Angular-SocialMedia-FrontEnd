import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userName: string;
  public emailAddress: string;
  public password: string;


  registerUser(): void {
    const newUser = {username: this.userName, emailAddress: this.emailAddress, password: this.password};
    this.userService.registerUser(newUser);
  }
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }

}
