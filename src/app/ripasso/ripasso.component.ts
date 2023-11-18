import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-ripasso',
    templateUrl: './ripasso.component.html',
    styleUrls: ['./ripasso.component.scss'],
})
export class RipassoComponent {
    urlNonSanificata =
        'https://www.youtube.com/embed/i8HHqKXR9iM?si=UPhCavkxW396G674';
    url: SafeResourceUrl = '';
    items: any;
    home: any;

    constructor(sanitizer: DomSanitizer) {
        if (this.checkUrl) {
            this.url = sanitizer.bypassSecurityTrustResourceUrl(
                this.urlNonSanificata
            );
            console.log('LOG', this.url);
        } else {
            alert('ATTENZIONE, URL MALEVOLA');
        }

        window.localStorage.getItem('');
    }

    /**
     *@todo  Mettere in un servizio
     */
    checkUrl(url: string): boolean {
        /**
         * Controlla che la url che voglio usare sia effettivametne come me la aspetto
         */
        return true;
    }
}
