import { Injectable, OnDestroy } from '@angular/core';
//import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserId } from '../types/user-id';
import { MoonId } from '../types/moon';
import { PlanetId } from '../types/planet';


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
  planetsData: boolean = true;
  moonsData: boolean = true;

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

  updateUser(username:string, email:string){
    return this.http
    .post<UserId>('/api/users/profile/edit', {username, email})
    .pipe(tap((user) => this.user$$.next(user)))
  }

  logout(){
    return this.http
    .post<UserId>('/api/users/logout', {})
    .pipe(tap(() => this.user$$.next(undefined)));
  }

  getMoonsByUser(){
    const id = this.user!._id
    return this.http.get<MoonId[]>(`/api/moons/${id}/moons`)
  }
  getPlanetsByUser(){
    const id = this.user!._id
    return this.http.get<PlanetId[]>(`/api/planets/${id}/planets`)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
