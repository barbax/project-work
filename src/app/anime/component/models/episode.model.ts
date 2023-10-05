export interface IEpisode{
    "mal_id": number,
    "url": string,
    "title": string,
    "title_japanese": string,
    "title_romanji": string,
    "aired": string,
    "score": number,
    "filler": boolean,
    "recap": boolean,
    "forum_url"?: string
    "duration"?: number;
    "synopsis"?: string;

  }

  export class Episode{
    "id": number;
    "url": string;
    "title": string;
    "title_japanese": string;
    "aired": Date;
    "score": number;
    "filler": boolean;
    "recap": boolean;
    "forum_url"?: string;
    "duration"?: number;
    "synopsis"?: string;

    constructor(e: IEpisode){
        this.id = e.mal_id;
        this.url = e.url;
        this.title = e.title;
        this.title_japanese = e.title_japanese;
        this.aired = new Date(e.aired);
        this.score = e.score;
        this.filler = e.filler;
        this.recap = e.recap;
        this.forum_url = e.forum_url;
        this.duration= e.duration;
        this.synopsis = e.synopsis;
    }
  }