import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from  'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl= "http://localhost:3001/api/users"

  constructor(private http:HttpClient) {}
  register ( user : User): Observable<User> {
   return this.http.post<User>(this.baseurl + '/register', User )
  }
  
  login (user: any):Observable<any> {
    return this.http.post<User>(this.baseurl + '/login', User )
  }
    

  }


