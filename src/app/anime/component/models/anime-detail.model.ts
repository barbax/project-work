export interface IAnimeDetail{
    "mal_id": string;
    "type": string;
    "name": string;
    "url": string;
}
export class AnimeDetail{
    "id": string;
    "type": string;
    "name": string;
    "url": string;
    constructor(ad: IAnimeDetail){
        this.id = ad.mal_id;
        this.type = ad.type;
        this.name = ad.name;
        this.url = ad.url;
    }
}