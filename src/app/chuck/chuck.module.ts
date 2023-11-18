import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategorieComponent } from './categorie/categorie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RandomComponent } from './random/random.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { ChuckComponent } from './chuck.component';
import { GalleriaModule } from 'primeng/galleria';
import { ChuckRoutingModule } from './chuck-routing.module';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        ChuckComponent,
        SidebarComponent,
        RandomComponent,
        NavbarComponent,
        CategorieComponent,
    ],

    imports: [
        CommonModule,
        ChuckRoutingModule, 
        CarouselModule, 
        MenuModule, 
        FormsModule, 
        GalleriaModule, 
        DialogModule,
        SharedModule,
        CardModule,
        HttpClientModule,
        ButtonModule],

})
export class ChuckModule {}
