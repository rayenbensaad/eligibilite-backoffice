import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://backend.assistantrenovationenergie.fr/contact';

const baseUrlNewsletter = 'https://backend.assistantrenovationenergie.fr/newsletter';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  getAllNewsletter() {
    return this.http.get('https://backend.assistantrenovationenergie.fr/newsletter');
  }


  deleteNewsletter(id) {
    return this.http.delete(`${baseUrlNewsletter}/${id}`);
  }

  deleteAllNewsletters() {
    return this.http.delete(baseUrlNewsletter);
  }
}
