import { AnimeDetail, IAnimeDetail } from "./anime-detail.model"

export interface IAnime {
    "mal_id": number,
    "url": string,
    "images": {
        "jpg": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
        },
        "webp": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
        }
    },
    "trailer": {
        "youtube_id": string,
        "url": string,
        "embed_url": string,
        "images": {
            "image_url": string,
            "small_image_url": string,
            "medium_image_url": string,
            "large_image_url": string,
            "maximum_image_url": string
        }
    },
    "approved": boolean,
    "titles": { "type": string, "title": string }[],
    "title": string,
    "title_english": string,
    "title_japanese": string,
    "title_synonyms": string[],
    "type": string,
    "source": string,
    "episodes": number,
    "status": string,
    "airing": boolean,
    "aired": {
        "from": string,
        "to": string,
        "prop": {
            "from": {
                "day": number,
                "month": number,
                "year": number
            },
            "to": {
                "day": number,
                "month": number,
                "year": number
            }
        },
        "string": string
    },
    "duration": string,
    "rating": string,
    "score": number,
    "scored_by": number,
    "rank": number,
    "popularity": number,
    "members": number,
    "favorites": number,
    "synopsis": string,
    "background": string,
    "season": "fall",
    "year": number,
    "broadcast": {
        "day": string,
        "time": string,
        "timezone": string,
        "string": string
    },
    "producers":IAnimeDetail[],
    "licensors": IAnimeDetail[],
    "studios": IAnimeDetail[],
    "genres": IAnimeDetail[],
    "explicit_genres": IAnimeDetail[],
    "themes": IAnimeDetail[],
    "demographics": IAnimeDetail[]
}

export class Anime {
    "id": number;
    "url": string;
    "cover": string;
    "thumbnail": string;

    "trailer": {
        "youtube_id": string,
        "url": string,
        "embed_url": string,
        "images": {
            "image_url": string,
            "small_image_url": string,
            "medium_image_url": string,
            "large_image_url": string,
            "maximum_image_url": string
        }
    };
    "titles": { "type": string, "title": string }[];
    "title": string;
    "title_japanese": string;

    "type": string;
    "source": string;
    "episodes": number;
    "status": string;
    "aired": {
        "from": Date,
        "to": Date,
    };
    "duration": string;
    "rating": string;
    "score": number;
    "scored_by": number;
    "rank": number;
    "popularity": number;
    "favorites": number;
    "synopsis": string;
    "background": string;
    "year": number;
    "producers": AnimeDetail[];
    "licensors": AnimeDetail[];
    "studios": AnimeDetail[];
    "genres": AnimeDetail[];
    "themes": AnimeDetail[];
    "demographics": AnimeDetail[];

    constructor(a: IAnime) {
        this.id = a.mal_id;
        this.url = a.url;
        this.cover = a.images.webp.large_image_url;
        this.thumbnail = a.images.webp.small_image_url;

        this.trailer = a.trailer;
        this.title = a.title;
        this.titles = a.titles;
        this.title_japanese = a.title_japanese;
        this.type = a.type;
        this.source = a.source;
        this.episodes = a.episodes;
        this.status = a.status;
        this.aired = {
            "from": new Date(a.aired.from),
            "to": new Date(a.aired.to)
        };
        this.duration = a.duration;
        this.rating = a.rating;
        this.score = a.score;
        this.scored_by = a.scored_by;
        this.rank = a.rank;
        this.popularity = a.popularity;
        this.favorites = a.favorites;
        this.synopsis = a.synopsis;
        this.background = a.background;
        this.year = a.year;
        
        this.producers = a.producers.map((x: IAnimeDetail) => new AnimeDetail(x));
        this.licensors = a.licensors.map((x: IAnimeDetail) => new AnimeDetail(x));
        this.studios = a.studios.map((x: IAnimeDetail) => new AnimeDetail(x));
        this.genres = a.genres.map((x: IAnimeDetail) => new AnimeDetail(x));
        this.themes = a.themes.map((x: IAnimeDetail) => new AnimeDetail(x));
        this.demographics = a.demographics.map((x: IAnimeDetail) => new AnimeDetail(x));

    }



}


