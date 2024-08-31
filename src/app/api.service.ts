import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000';


  constructor(private http: HttpClient) { }

  signUp(userData:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/register`,userData);
  }

  login(userCredential:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/login`,userCredential)
  }
}
