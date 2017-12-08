import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {TransactionService} from "../home/transaction.service";

export interface AvgResult {
  month: number;
  avg_txn: number;
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @ViewChild('chartDetail') chartDetail: ViewChild;
  avg_transactions: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // 12 zeros. One for each month.
  isLoading: boolean;
  version: string = environment.version;
  showDetailChart: boolean = false;
  detailMonth: string;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getRollingAverage();
  }

  getRollingAverage() {
    this.transactionService.getRollingAverage()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe(results => {
        for (let avg of results) {
          this.avg_transactions[avg.month - 1] = avg.avg_txn;
        }
        this.lineChartData = [{data: this.avg_transactions, label: 'Rolling Avg'}];
      });
  }


  // Initial Chart Variables and Listeners.
  public lineChartData:Array<any> = [
    {data: this.avg_transactions, label: 'Rolling Avg'}
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartType:string = 'line';

  public chartClicked(e:any):void {
    if(e.active.length > 0) {
      if (this.lineChartLabels[e.active[0]._index] != this.detailMonth) {
        this.detailMonth = this.lineChartLabels[e.active[0]._index];
        this.showDetailChart = true;
      } else {
        this.showDetailChart = false;
        this.detailMonth = '';
      }
    }
  }




  // Detail Chart Variables and Listeners.
  public lineChartDetailData:Array<any> = [
    {data: this.avg_transactions, label: 'Rolling Avg'}
  ];

  public lineChartDetailLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public lineChartDetailOptions:any = {
    responsive: true
  };

  public lineChartDetailType:string = 'line';

  public lineChartDetailColors:Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];



}
