import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {AuthenticationService} from "../core/authentication/authentication.service";

const routes = {
  transactionList: '/transactions/service1/',
  transactionUser: '/transactions/service1/user/',
  year: '/transactions/service2/year/',
  month: '/transactions/service2/month/'
};

@Injectable()
export class TransactionService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService) { }

  getTransactionList(offset: number): Observable<any> {
    const headers = new Headers();
    headers.set('Authorization', 'Token ' + this.authenticationService.credentials.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(routes.transactionList + '?page=' + offset, {headers})
      .pipe(
        map((res: Response) => {
          return res.json();
        }),
      );
  }

  getTransactionUser(user: number): Observable<any> {
    const headers = new Headers();
    headers.set('Authorization', 'Token ' + this.authenticationService.credentials.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(routes.transactionUser + user, {headers})
      .pipe(
        map((res: Response) => {
          return res.json();
        }),
      );
  }

  getRollingAverageYear(): Observable<any> {
    const headers = new Headers();
    headers.set('Authorization', 'Token ' + this.authenticationService.credentials.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(routes.year, {headers})
      .pipe(
        map((res: Response) => {
          return res.json();
        }),
      );
  }

  getRollingAverageMonth(month: number): Observable<any> {
    const headers = new Headers();
    headers.set('Authorization', 'Token ' + this.authenticationService.credentials.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(routes.month  + month, {headers})
      .pipe(
        map((res: Response) => {
          return res.json();
        }),
      );
  }

}
