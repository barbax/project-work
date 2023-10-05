import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RipassoComponent } from './ripasso.component';

const routes: Routes = [
  {
    path: '',
    component: RipassoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RipassoRoutingModule { }
