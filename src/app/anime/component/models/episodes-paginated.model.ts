import { Episode, IEpisode } from "./episode.model";
import { IHttpResponse, IPagination } from "./httpResponse.model";

export class EpisodesPaginated {
    episodes: Episode[];
    pagination?: IPagination;

    constructor(r: IHttpResponse, current_page: number = 1) {
        this.episodes = r.data.map((e: IEpisode) => new Episode(e))
        
        this.pagination = r.pagination;
        console.log(this.pagination);
        
        if (this.pagination) {
            this.pagination.current_page = current_page;
            this.pagination.items = {
                per_page: 100,
                count: this.episodes.length,
                total: 100 * r.pagination!.last_visible_page
            };
        }
    }

}