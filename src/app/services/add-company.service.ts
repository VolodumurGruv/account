import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddCompanyService {
  private url = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get(`${this.url}/`);
  }

  addCompany(company: any): Observable<any> {
    return this.http.post(`${this.url}/addcompany`, JSON.stringify(company));
  }
}
