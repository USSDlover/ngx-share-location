import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLocationComponent } from './share-location/share-location.component';
import { LocationMapComponent } from './share-location/location-map/location-map.component';
import { LocationTypeComponent } from './share-location/location-type/location-type.component';
import { LocationImageComponent } from './share-location/location-image/location-image.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ShareLocationRoutingModule } from './share-location-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ShareLocationComponent,
    LocationMapComponent,
    LocationTypeComponent,
    LocationImageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ShareLocationRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ShareLocationModule { }
