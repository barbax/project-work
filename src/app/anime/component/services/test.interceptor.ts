import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, tap, map } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const miaReq = request.clone({
      setParams:{
        "parametro-mio":'valore a mio piacimento'
      }
    });

    
    console.log('*******',miaReq);


    return next.handle(miaReq).pipe(
      tap((r:any)=>{
        console.log('RISPSOTA DEL WS DAL INTERCEPTOR', r);
      }),
      delay(2000),
      map((r:any)=> r)
    );
  }
}
