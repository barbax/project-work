import { Component } from '@angular/core';
import { Episode } from '../models/episode.model';
import { AnimeService } from '../services/anime.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episode: Episode | undefined;
  idAnime: number | undefined;

  constructor(
    private readonly animeService: AnimeService,
    route: ActivatedRoute
  ){
    route.params.subscribe(
      (p: Params)=>{
        this.idAnime = <number> p['id_anime'];
        const idEpisode = <number> p['id_episode'];
        this.getEpisode(this.idAnime, idEpisode);

      }
    )
  }

  getEpisode(idAnime:number,idEpisode: number){
    this.animeService.animeEpisode(idAnime,idEpisode).subscribe(
      (r:Episode)=>{
        this.episode = r; 
      },
      (e:any)=>{
        alert('Errore HTTP');
        console.error(e);
      }
    );

  }

}
