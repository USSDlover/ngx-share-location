import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareLocationComponent } from './share-location/share-location.component';

const routes: Routes = [
  {
    path: '',
    component: ShareLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareLocationRoutingModule { }
