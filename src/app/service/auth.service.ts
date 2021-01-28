import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post('http://localhost:3000/signin', data);
  }

  update(id, data) {
    return this.http.put(`http://localhost:3000/auth/${id}`, data);
  }

  forgetPassword(data): Observable<any> {
    return this.http.post(`http://localhost:3000/forgetPasword/`, data);
  }

}
