import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  cors = "https://cors-anywhere.herokuapp.com/"
  baseurl = "http://swapi.co/api/planets"

  constructor(private http: HttpClient) { }

  getAll() {

    return this.http.get(this.cors + this.baseurl).toPromise()
  }
}
