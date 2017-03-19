import { Injectable } from '@angular/core';
import { Location } from './location';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class LocationService {

  lastId: number = 0;

  // Placeholder 
  locations: Location[] = [];

  constructor(private http: Http) {
  }


  // Simulate POST 
  addLoc(location: Location): LocationService {
    if (!location.id) {
      location.id = ++this.lastId;
    }
    this.locations.push(location);
    return this;
  }

  // Simulate DELETE /locations/:id
  deleteLocById(id: number): LocationService {
    this.locations = this.locations
      .filter(location => location.id !== id);
    return this;
  }

  // Simulate PUT /locations/:id
  updateLocById(id: number, values: Object = {}): Location {
    let location = this.getLocById(id);
    if (!location) {
      return null;
    }
    Object.assign(location, values);
    return location;
  }

 // Simulate GET /locations
  getAllLocs(): Location[] {
    return this.locations;
  }

 /* getAllLocs():Location[]  {
        this.http.get('/api/travel')
                      .map( response => response.json())
                      .subscribe(data  => this.locations = data);
      return this.locations;
                      
  }*/

  // Simulate GET /locations/:id
  getLocById(id: number): Location {
    return this.locations
      .filter(location => location.id === id)
      .pop();
  }

  // Toggle location complete
  toggleLocComplete(location: Location){
    let updatedLocatiion = this.updateLocById(location.id, {
      complete: !location.complete
    });
    return updatedLocatiion;
  }

}