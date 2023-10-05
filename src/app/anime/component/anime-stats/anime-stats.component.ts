import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Anime } from '../models/anime.model';

@Component({
  selector: 'app-anime-stats',
  templateUrl: './anime-stats.component.html',
  styleUrls: ['./anime-stats.component.scss']
})
export class AnimeStatsComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterViewChecked {

  @Input() anime: Anime[] | undefined;

  constructor() {
    console.log('[CONSTRUCTOR] Chiamato')
  }
  ngAfterViewChecked(): void {
    // console.log('[After View Checked]');
  }

  ngAfterViewInit(): void {
    // console.log('[AFTER VIEW INIT]');
  }

  ngAfterContentInit(): void {
    // console.log('[AFTER CONTENT INIT]');
  }
  ngOnDestroy(): void {
    // console.log('[ON DESTROY].');
  }

  ngDoCheck(): void {
    // console.log('[DO CHECK]');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('[ON CHANGES]' , changes);
  }

  ngOnInit(): void {
    // console.log('[ON INIT] Chiamato')
  }

}
