import { Component, OnDestroy, } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimePaginated } from '../models/anime-paginated.model';
import { IPagination } from '../models/httpResponse.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  query: string = "";
  anime: Anime[] = [];
  pagination: IPagination | undefined;
  subscription: Subscription;
  loading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly animeService: AnimeService
  ) {
    /**/
    this.subscription = this.route.queryParams.subscribe(
      (p: Params) => {
        console.log(p);
        if (p['q']) {
          this.query = p['q'];
          /*
          if(p['page']){
            let page = p['page'];
          }else{
            let page = 1;
          }
          */
          //ESEMPIO OPERATORE TERNARIO
          const condizione = true;
          const variabile = condizione ? "VALORE SE VERO" : "VALORE SE FALSO";

          const page = p['page'] ? p['page'] : 1;


          this.search(page);
        }
      }
    )
    /*
        this.route.params.subscribe(
          (p:Params)=>{
            if(p['q']){
              this.query = p['q'];
              this.search();
            }
          });*/
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('**Home On Destroy e unsubscribe');
  }



  search(page: number = 1) {
    /*this.router.navigate(['search', this.query]);
    */
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: {
    //     q: this.query,
    //     page: page
    //   }
    // });
    this.loading = true;
    this.animeService.search(this.query, page).subscribe({
      next: (r: AnimePaginated) => {
        this.loading = false;
        this.anime = r.anime;
        this.pagination = r.pagination;
      },
      error: (e) => {
        this.anime = [];
        this.loading = false;
        console.error('ERRORE HTTP CATTURATO', e);
      }
    }
    );



  }

  show(id: number) {
    //this.router.navigate(['anime', id]);
    this.router.navigate(['anime', id], {
      queryParams: {
        q: this.query
      },

    });
  }

  pageChange(event: any) {
    this.pagination.current_page = event.first / event.rows + 1;
    this.search(this.pagination.current_page)
  }

}
