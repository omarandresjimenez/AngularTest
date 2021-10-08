import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../share/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<UserModel[]>('https://api.github.com/users?per_page=5');
  }
}
