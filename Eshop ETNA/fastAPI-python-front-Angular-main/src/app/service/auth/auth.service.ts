import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000';

  public user: Observable<string>
  public userSubject: BehaviorSubject<string>

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') || '')
    this.user = this.userSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    
    return this.http.post(url, body);
  }

  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/users`;
    return this.http.post<User>(url, user);
  }
}