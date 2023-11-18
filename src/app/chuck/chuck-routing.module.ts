import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ChuckComponent } from './chuck.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const chuckRoutes: Routes = [
    {
        path: '',
        component: ChuckComponent,

        children: [
            {
                path: 'random',
                component: RandomComponent,
            },
            {
                path: 'categorie',
                component: CategorieComponent,
            },
            {
                path: '',
                redirectTo: 'random',
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: 'random',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [HttpClientModule, RouterModule.forChild(chuckRoutes), CommonModule],
    exports: [RouterModule],
})
export class ChuckRoutingModule {}
