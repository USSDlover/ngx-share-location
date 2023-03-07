import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationType } from './location.type';

@Component({
  selector: 'app-location-type',
  templateUrl: './location-type.component.html',
  styleUrls: ['./location-type.component.scss']
})
export class LocationTypeComponent {
  @Input() selectedLocationType?: LocationType;
  @Output() selectedLocationTypeChange = new EventEmitter<LocationType>();

  businessTypes: {title: string; value: LocationType}[] = [
    {
      title: 'Retail Sales',
      value: 'retail_sales'
    },
    {
      title: 'Online Business',
      value: 'online_business'
    },
    {
      title: 'AC & Heating',
      value: 'ac_and_heating'
    }
  ]
}
