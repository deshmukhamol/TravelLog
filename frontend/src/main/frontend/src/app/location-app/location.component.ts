import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'location-app',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
    providers: [LocationService]
})
export class LocationComponent {
 newLocation: Location = new Location();
 time: string;

  constructor(private locationService: LocationService) {

  }

  addLoc() {
    this.locationService.addLoc(this.newLocation);
    this.newLocation = new Location();
  }

  toggleLocComplete(location) {
    this.locationService.toggleLocComplete(location);
  }

  removeLoc(location) {
    this.locationService.deleteLocById(location.id);
  }

  get Locs() {
    return this.locationService.getAllLocs();
  }

 ngOnInit() {
  }

}
