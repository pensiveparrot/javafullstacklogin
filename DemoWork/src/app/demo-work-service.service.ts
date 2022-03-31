import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { loginmodel } from './login/loginmodel';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DemoWorkServiceService {
private baseURL="http://localhost:8080/api/v1/login";
constructor(private httpClient: HttpClient) { }


Login(login:loginmodel): Observable<object>{
  console.log(loginmodel);
  return this.httpClient.post(`${this.baseURL}`,login);
}
}
