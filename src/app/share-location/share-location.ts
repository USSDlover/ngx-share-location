import { LatLng } from 'leaflet';
import { LocationType } from './share-location/location-type/location.type';

export type ShareLocation = {
  name: string;
  latLng: LatLng;
  type: LocationType;
  image: string;
}
