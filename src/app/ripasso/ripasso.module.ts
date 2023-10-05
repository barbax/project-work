import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RipassoRoutingModule } from './ripasso-routing.module';
import { RipassoComponent } from './ripasso.component';


@NgModule({
  declarations: [
    RipassoComponent
  ],
  imports: [
    CommonModule,
    RipassoRoutingModule
  ]
})
export class RipassoModule { }
