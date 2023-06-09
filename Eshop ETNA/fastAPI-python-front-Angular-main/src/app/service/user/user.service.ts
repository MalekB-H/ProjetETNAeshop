import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/model/adresse';
import { User, UserUpdate } from 'src/app/model/user';
import { environment }from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.apiUrl;
  user: User = {username: '', email: '', adresse: '', phone_number: '', id: 0}

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}users/${id}`)
  }

  getAdresse() {
    return this.http.get<Adresse[]>(`${this.API_URL}routeAcreer`)
  }

  AddAdresse(addr: Adresse) {
    return this.http.post<Adresse>(`${this.API_URL}routeAcreer`, addr)  
  }

  getAdressById(addr: Adresse) {
    return this.http.get<Adresse>(`${this.API_URL}routeAcreer2`)
  }

  EditUser(id: number, user: UserUpdate) {
    return this.http.put<User>(`${this.API_URL}users/${id}`, user)
  }

  DeleteUser(id: number) {
    return this.http.delete(`${this.API_URL}users/${id}`)
  }

}
