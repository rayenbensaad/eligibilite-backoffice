import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post('https://backend.assistantrenovationenergie.fr/signin', data);
  }

  update(id, data) {
    return this.http.put(`https://backend.assistantrenovationenergie.fr/auth/${id}`, data);
  }

  forgetPassword(data): Observable<any> {
    return this.http.post(`https://backend.assistantrenovationenergie.fr/forgetPasword/`, data);
  }

  updateEmail(id,data): Observable<any> {
    return this.http.post(`https://backend.assistantrenovationenergie.fr/UpdateEmail/${id}`, data);
  }
}
