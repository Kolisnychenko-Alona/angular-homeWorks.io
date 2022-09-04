import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {
  public inputField = 'inputField';
  public isEdit = false;
  public users: Array<any> = [];
  
  public login!:string;
  public password!:string;
  public email!:string;
  public userIndex!: number;

  public loginRegExp = /^[a-zA-Z]{4,16}$/;
  public passRegExp = /^[\w\-\.]{4,16}$/;
  public emailRegExp = /^[\w\-\.]+@[a-z]+\.[a-z]+$/;

  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void {
    if (!this.login || !this.password || !this.email) {
      this.inputField += ' red';
    }
    else {
      let testLogin: boolean = this.loginRegExp.test(this.login);
      let testPass: boolean =  this.passRegExp.test(this.password);
      let testEmail: boolean = this.emailRegExp.test(this.email);

      if (testLogin && testPass && testEmail) {
        let user = {
          login: this.login,
          password: this.password,
          email: this.email
        }
        this.users.push(user);
        this.login = '';
        this.password = '';
        this.email = '';
        this.inputField = 'inputField';
      }
      else {
        this.inputField += ' red';
      }
      
    }
    
  }
  deleteUser(index:number):void {
    this.users.splice(index, 1);
  }
  editUser(index:number):void {
    this.login = this.users[index].login;
    this.password = this.users[index].password;
    this.email = this.users[index].email;
    this.userIndex = index;
    this.isEdit = true;
  }
  saveEditUser(): void {
    if (!this.login || !this.password || !this.email) {
      this.inputField += ' red';
    }
    else {
      let testLogin: boolean = this.loginRegExp.test(this.login);
      let testPass: boolean =  this.passRegExp.test(this.password);
      let testEmail: boolean = this.emailRegExp.test(this.email);

      if (testLogin && testPass && testEmail) {
        let user = {
          login: this.login,
          password: this.password,
          email: this.email
        }
        this.users[this.userIndex] = user;
        this.login = '';
        this.password = '';
        this.email = '';
        this.isEdit = false;
        this.inputField = 'inputField';
      }
      else {
        this.inputField += ' red';
      }
      
    }
    
  }

}
