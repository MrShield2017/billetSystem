import { Component, OnInit } from '@angular/core';
import { BestillingService } from './bestilling.service';

@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.css']
})
export class BestillingComponent implements OnInit {

  postData: string;
  mail: String = '';
  event: String = '';
  date: String = '100';

  constructor(private _bs: BestillingService) { }

  ngOnInit() {
  }

  send() {
    const json = JSON.stringify({
      mail: this.mail,
      event: this.event,
      date: this.date
    });
    this._bs.postTest(json).subscribe(data => this.postData = JSON.stringify(data) );
  }
}
