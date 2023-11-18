import { Component } from '@angular/core';
import { Anime } from '../models/anime.model';
import { AnimeService } from '../services/anime.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Episode } from '../models/episode.model';
import { EpisodesPaginated } from '../models/episodes-paginated.model';
import { IPagination } from '../models/httpResponse.model';
import { LogarithmicScale } from 'chart.js';

@Component({
    selector: 'app-anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent {
    anime: Anime | undefined;
    statistics: any;
    episodes: Episode[] | undefined;
    episodesPagination: IPagination | undefined;
    idAnime: number = 0;
    currentPage: number = 1;

    constructor(
        private readonly animeService: AnimeService,
        private readonly router: Router,
        route: ActivatedRoute
    ) {
        route.params.subscribe((p: Params) => {
            this.idAnime = <number>p['id_anime'];
            this.getAnime(this.idAnime);
            this.currentPage = <number> p['page'] ? p['page'] : 1;
        });
    }

    getAnime(id: number) {
        this.animeService.anime(id).subscribe(
            (r: Anime) => {
                this.anime = r;
            },
            (e: any) => {

                console.error('ANIME ERROR', e);
            }
        );

        this.animeService.animeStatistics(id).subscribe(
            (r: any) => {
                this.statistics = r;
            },
            (e: any) => {
                alert('Errore retrive Statistics');


                console.error('Statistics ERROR', e);
            }
        );

        this.getEpisodes(id);
    }

    getEpisodes(id: number, page: number = 1) {
        this.animeService.animeEpisodes(id, page).subscribe(
            (r: EpisodesPaginated) => {
                this.episodes = r.episodes;
                this.episodesPagination = r.pagination;
            },
            (e: any) => {
                alert('Errore retrive Episodes');

                console.error('Episodes ERROR', e);
            }
        );
    }

    showEpisode(id: number) {
        this.router.navigate(['anime', this.anime?.id, 'episodes', id]);
    }
 

    pageChange(event: any) {
       
        this.currentPage = event.first / event.rows + 1;
        this.getEpisodes(this.idAnime, this.currentPage);
        console.log('EVENTFIRST', event);
        console.log('CURRENTPAGE', this.currentPage);
        
      }
}
