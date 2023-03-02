import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-type',
  templateUrl: './location-type.component.html',
  styleUrls: ['./location-type.component.scss']
})
export class LocationTypeComponent {
  @Input() selectedLocationType?: string;
  @Output() selectedLocationTypeChange = new EventEmitter<string>();

  businessTypes: {title: string; value: string}[] = [
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
