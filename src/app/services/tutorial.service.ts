import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseurl = 'http://localhost:8080/api/tutorials';
@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseurl);
  }
  get(id): Observable<any> {
    return this.http.get(`${baseurl}/${id}`);
  }
  create(data):Observable<any>{
    return this.http.post(baseurl,data);
  }
  update(id,data):Observable<any>{
    return this.http.put(`${baseurl}/${id}`,data);
  }
  delete(id):Observable<any>{
    return this.http.delete(`${baseurl}/${id}`);
  }
  deleteAll():Observable<any>{
    return this.http.delete(baseurl);
  }
  findByTitle(title):Observable<any>{
    return this.http.get(`${baseurl}?title=${title}`);
  }
}
