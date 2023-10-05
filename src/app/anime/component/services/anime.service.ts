import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHttpResponse } from '../models/httpResponse.model';
import { Anime } from '../models/anime.model';
import { Episode } from '../models/episode.model';
import { AnimePaginated } from '../models/anime-paginated.model';
import { EpisodesPaginated } from '../models/episodes-paginated.model';

@Injectable({
    providedIn: 'root',
})
export class AnimeService {
    private readonly BASE_API: string = 'https://api.jikan.moe/v4';
    //private readonly BASE_API: string = "https://1842bf46-0ebc-4c7c-93eb-39df5122531d.mock.pstmn.io/esame";

    constructor(private readonly http: HttpClient) {}

    search(q: string, page: number = 1): Observable<AnimePaginated> {
        return this.http
            .get<IHttpResponse>(`${this.BASE_API}/anime?q=${q}&page=${page}`)
            .pipe(map((r: IHttpResponse) => new AnimePaginated(r)));
    }
    animeEpisodes(id: number, page: number = 1): Observable<EpisodesPaginated> {
        return this.http
            .get<IHttpResponse>(
                `${this.BASE_API}/anime/${id}/episodes`
            )
            .pipe(map((r: IHttpResponse) => new EpisodesPaginated(r, page)));
    }

    anime(id: number): Observable<Anime> {
        return this.http
            .get<IHttpResponse>(`${this.BASE_API}/anime/${id}`)
            .pipe(map((r: IHttpResponse) => new Anime(r.data)));
    }

    animeStatistics(id: number): Observable<any> {
        return this.http
            .get<IHttpResponse>(`${this.BASE_API}/anime/${id}/statistics`)
            .pipe(map((r: IHttpResponse) => r.data));
    }

    animeEpisode(id_anime: number, id_episode: number): Observable<Episode> {
        return this.http
            .get<IHttpResponse>(
                `${this.BASE_API}/anime/${id_anime}/episodes/${id_episode}`
            )
            .pipe(map((r: IHttpResponse) => new Episode(r.data)));
    }
}
