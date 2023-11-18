import { Component } from '@angular/core';
import { ChuckNorrisService } from '../service/chuck-norris.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
  providers: [MessageService]

})
export class CategorieComponent {
  categorie: string[] = [];
  errore: string = "";
  closeResult: string = "";
  joke: any;
  show = false;
  visible: boolean = false;
 showCategori: string="";
  constructor(
    private serviceChuckNorris: ChuckNorrisService,
    private messageService: MessageService
  ) {
    this.getElenco()
  }
  getElenco() {
    this.serviceChuckNorris.getElenco().subscribe(
      (r: any) => {
        this.categorie = r;
      },
      (err: any) => {
        this.show = true;
        this.errore = err;
      }
    )
  }
  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
}
    showDialog(category: string) {
      this.showCategori=category;
      this.getCategoryJokes(this.showCategori)
        this.visible = true;
    }
  getCategoryJokes(categoria: string) {
    return this.serviceChuckNorris.getRandomCategories(categoria).subscribe(
      (r: any) => {
        this.joke = r;
      },
      (err: any) => {
        this.errore = err;
      }
    )
  }
}
