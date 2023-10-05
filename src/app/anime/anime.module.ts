import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { EpisodesComponent } from './component/episodes/episodes.component';
import { AnimeStatsComponent } from './component/anime-stats/anime-stats.component';
import { AnimeComponent } from './component/anime/anime.component';
import { AnimeContainerComponent } from './component/anime-container/anime-container.component';
import { animeRouter } from './component/anime/anime.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EpisodesComponent,
        HomeComponent,
        AnimeStatsComponent,
        AnimeComponent,
        AnimeContainerComponent,
    ],
    imports: [animeRouter, SharedModule],
})
export class AnimeModule {}
