import { Anime, IAnime } from "./anime.model";
import { IHttpResponse, IPagination } from "./httpResponse.model";

export class AnimePaginated {
    anime: Anime[];
    pagination?: IPagination;
    constructor(r: IHttpResponse) {
        this.pagination = r.pagination;
        this.anime = r.data.map(
            (anime: IAnime) => new Anime(anime)
        );
    }
}