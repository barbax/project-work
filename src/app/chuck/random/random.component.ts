import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../service/chuck-norris.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent  {
  randomJoke : any = {};
  errore : string = "";
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  products: any[]= [
    {Image:'https://www.sportnews.eu/wp-content/uploads/Chuck-Norris.jpg'},
    {Image:'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg'},
    {Image:'https://www.movietele.it/wp-content/uploads/2023/08/Chuck-Norris-oggi.jpg'},
];
constructor(private service : ChuckNorrisService){
 this.getRandom()
}
getRandom(){
  this.service.getRandom().subscribe((r)=>{
    this.randomJoke = r},
  (er)=>{this.errore})
}
onSlide() {
 this.getRandom()
}
}
