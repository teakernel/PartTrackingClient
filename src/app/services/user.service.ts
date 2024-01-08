import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

const baseURL = 'http://localhost:8080/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  logout(): Observable<any> {
    return this.http.post(baseURL + 'signout', { }, httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      baseURL + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  getAll() {
    return this.http.get<User[]>(baseURL + 'list');
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(baseURL + 'register', {
      username,
      email,
      password,
    },
    httpOptions);
  }

  delete(id: string) {
    return this.http.delete(`${baseURL}/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue?.userId) {
          this.logout();
        }
        return x;
      }));
  }
}
