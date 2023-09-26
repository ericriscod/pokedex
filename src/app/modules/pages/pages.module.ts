import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.modules';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, RoutingModule, SharedModule],
})
export class PagesModule {}
