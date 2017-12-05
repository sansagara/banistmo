import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import {TransactionService} from './transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transactions: Array<any>;
  count: number;
  next: string;
  previous: string;
  isLoading: boolean;
  page: number = 1;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getTransactionList();
  }


  getTransactionList() {
    this.transactionService.getTransactionList(this.page)
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe(result => {
        console.log('result', result);
        this.transactions = result.results;
        this.count = result.count;
        this.next = result.count;
        this.previous = result.previous;
      });
  }

  nextPage() {
    this.page++;
    this.getTransactionList();
  }

  prevPage() {
    this.page--;
    this.getTransactionList();
  }

  toPage(page: number) {
    this.page = page;
    this.getTransactionList();
  }
}
