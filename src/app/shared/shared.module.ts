import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        ImageModule,
        AccordionModule,
        RatingModule,
        ProgressSpinnerModule,
        BreadcrumbModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        ImageModule,
        AccordionModule,
        RatingModule,
        ProgressSpinnerModule,
        BreadcrumbModule,
    ],
})
export class SharedModule { }
