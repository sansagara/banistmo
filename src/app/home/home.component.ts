import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
  isLoadingDetail: boolean;
  page: number = 1;
  detail_uuid: number;
  detail_transactions: Array<any>;

  constructor(private transactionService: TransactionService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.isLoading = true;
    this.getTransactionList();
  }


  getTransactionList() {
    this.transactionService.getTransactionList(this.page)
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe(result => {
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

  openModal(content: any, uuid: number) {
    console.log("Getting transaction details for uuid:", uuid);
    this.detail_uuid = uuid;
    this.modalService.open(content);
    this.isLoadingDetail = true;
    this.transactionService.getTransactionUser(uuid)
      .pipe(finalize(() => { this.isLoadingDetail = false; }))
      .subscribe(result => {
        console.log('details for user', result);
        this.detail_transactions = result;
      });
  }

}
