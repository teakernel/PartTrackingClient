import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

const baseURL = 'http://localhost:8080/pts/users';

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

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  login(email: string, password: string) {
    return this.http.post(`${baseURL}/login`, { email, password });
  }

  getAll() {
    return this.http.get<User[]>(baseURL);
  }

  register(data: any): Observable<any> {
    return this.http.post(baseURL, data);
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
