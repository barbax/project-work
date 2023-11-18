import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RipassoRoutingModule } from './ripasso-routing.module';
import { RipassoComponent } from './ripasso.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    RipassoComponent
    
  ],
  imports: [
    CommonModule,
    RipassoRoutingModule,
    BreadcrumbModule

  ]
})
export class RipassoModule { }
