import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { map, tileLayer, Map, LeafletMouseEvent, marker, Marker, LatLng } from 'leaflet';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements AfterViewInit {
  @Input() locationLatLng?: LatLng;
  @Output() locationLatLngChange = new EventEmitter<LatLng>();

  private map?: Map;
  private marker?: Marker;

  private initMap(): void {
    this.map = map('map', {
      center: [ 40.8282, -98.5899 ],
      zoom: 13
    });

    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on('click', e => this.onMapClick(e));
  }

  private onMapClick(e: LeafletMouseEvent): void {
    if (this.marker) {
      this.marker.setLatLng(e.latlng);
      return;
    } else {
      this.marker = marker(e.latlng).addTo(this.map!);
    }

    this.locationLatLng = e.latlng;
    this.locationLatLngChange.emit(this.locationLatLng);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
