import { Injectable } from '@angular/core';
import { ShareLocation } from './share-location';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class ShareLocationService {
  saveLocation(selectedLocation: ShareLocation): Observable<ShareLocation> {
    localStorage.setItem('selected_location', JSON.stringify(selectedLocation));
    return of(selectedLocation)
      .pipe(delay(2000));
  }

  getStoredLocation(): ShareLocation | null {
    if (localStorage.getItem('selected_location'))
      return JSON.parse(localStorage.getItem('selected_location')!);
    else
      return null;
  }
}
