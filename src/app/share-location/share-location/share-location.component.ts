import { Component } from '@angular/core';
import { LatLng } from 'leaflet';
import { LocationType } from './location-type/location.type';
import { ShareLocationService } from '../share-location.service';

@Component({
  selector: 'app-share-location',
  templateUrl: './share-location.component.html',
  styleUrls: ['./share-location.component.scss']
})
export class ShareLocationComponent {
  locationName?: string;
  locationLatLng?: LatLng;
  locationType?: LocationType;
  locationImage = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

  constructor(private service: ShareLocationService) {}

  onSubmit(): void {
    this.service
      .saveLocation({
        name: this.locationName!,
        latLng: this.locationLatLng!,
        type: this.locationType!,
        image: this.locationImage!,
      }).subscribe();
  }

  invalidForm(): boolean {
    return !this.locationName || !this.locationLatLng || !this.locationType
    || !this.locationImage;
  }
}
