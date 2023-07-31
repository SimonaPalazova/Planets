import { Injectable, OnDestroy } from '@angular/core';
//import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserId } from '../types/user-id';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<UserId | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  //user: User | undefined;
  user: UserId | undefined
  USER_KEY = '[user]';

  get isLogged():boolean{
    return !!this.user
  }

  subscription: Subscription; 

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }
     
  login(email: string, password: string) {
    return this.http
    .post<UserId>('/api/users/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username:string, 
    email: string, 
    password: string, 
    rePassword: string
    ){
    return this.http
    .post<UserId>('/api/users/register', {username, email, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)));
  }
  getUrser(){
    return this.http
    .get<UserId>(`/api/users/profile`)
    .pipe(tap((user) => this.user$$.next(user)))
  }

  logout(){
    return this.http
    .post<UserId>('/api/users/logout', {})
    .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
