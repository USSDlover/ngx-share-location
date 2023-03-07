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
import { ShareLocationService } from './share-location.service';

const AngularMaterialModules = [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    LocationMapComponent,
    LocationTypeComponent,
    LocationImageComponent,
    ShareLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...AngularMaterialModules,
    ShareLocationRoutingModule,
  ],
  providers: [ShareLocationService]
})
export class ShareLocationModule { }
