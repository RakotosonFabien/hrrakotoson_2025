import { Injectable } from '@angular/core';
import { Listing } from '../type';
import { fakeListings } from '../fake_data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  api_url:string = 'https://spring-resource-management.onrender.com';
  // api_url:string = 'http://localhost:8080';
  constructor(
    private http:HttpClient 
  ) { }

  getListings():Observable<Listing[]>{
    return this.http.get<Listing[]>(this.api_url + '/api/tests');
  }

  getOneListing(id:string):Observable<Listing>{
    return this.http.get<Listing>(this.api_url + '/api/tests/'+id);
  }

  modifyListing(listing:Listing){
    return this.http.put<Listing>(this.api_url + '/api/tests/'+listing.id, listing);
  }

  createListing(listing:Listing){
    return this.http.post<Listing>(this.api_url + '/api/tests', listing);
  }
  
  deleteListing(id:string){
    return this.http.delete(this.api_url + '/api/tests/'+id);
  }
}
