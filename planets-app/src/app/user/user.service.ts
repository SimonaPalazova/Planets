import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged():boolean{
    return !!this.user
  }
  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
     
  login(email: string, password: string) {
    return this.http.post('/api/users/login', {email, password})
  }

  register(
    username:string, 
    email: string, 
    password: string, 
    rePassword: string
    ){
    return this.http.post('/api/users/register', {username, email, password, rePassword})
  }

  logout() :void{
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
