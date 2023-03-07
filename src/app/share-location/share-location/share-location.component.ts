import { Component } from '@angular/core';
import { LatLng } from 'leaflet';
import { LocationType } from './location-type/location.type';
import { ShareLocationService } from '../share-location.service';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { NgxSnackLoaderComponent, NgxSnackLoaderService } from 'ngx-snack-loader';

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

  snackLoaderRef?: MatSnackBarRef<NgxSnackLoaderComponent>;

  constructor(
    private service: ShareLocationService,
    private snackLoader: NgxSnackLoaderService
  ) {}

  onSubmit(): void {
    if (!this.snackLoaderRef)
      this.snackLoaderRef = this.snackLoader.open('Saving the location');
    this.service
      .saveLocation({
        name: this.locationName!,
        latLng: this.locationLatLng!,
        type: this.locationType!,
        image: this.locationImage!,
      }).subscribe(() => this.snackLoaderRef?.dismiss());
  }

  invalidForm(): boolean {
    return !this.locationName || !this.locationLatLng || !this.locationType
    || !this.locationImage;
  }
}
