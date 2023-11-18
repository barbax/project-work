import { RouterModule, Routes } from '@angular/router';
import { AnimeContainerComponent } from '../anime-container/anime-container.component';
import { HomeComponent } from '../home/home.component';
import { AnimeComponent } from './anime.component';
import { EpisodesComponent } from '../episodes/episodes.component';

const animeRoutes: Routes = [
    {
        path: '',
        component: AnimeContainerComponent,
        children: [
            {
                path: 'search',
                component: HomeComponent,
            },
            {
                path: ':id_anime',
                component: AnimeComponent,
            },
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full',
            },
            {
                path: ':id_anime/episodes/:id_episode',
                component: EpisodesComponent,
            },
        ],
    },
];

export const animeRouter = RouterModule.forChild(animeRoutes);
