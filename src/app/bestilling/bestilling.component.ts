import { Component, OnInit } from '@angular/core';
import { BestillingService } from './bestilling.service';

@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.css']
})
export class BestillingComponent implements OnInit {

private f: forstilling


  postData: string;
  mail: String = '';
  event: String = '';
  date: String = '100';
  titel: string;
  beskrivelse: string;
  artist: string;
  dato: Date;

  constructor(private _bs: BestillingService) { }

  ngOnInit() {
    this.titel = this._bs.forstillingen.titel;
    this.beskrivelse = this._bs.forstillingen.beskrivelse;
    this.artist = this._bs.forstillingen.artist;
    this.dato = this._bs.forstillingen.dato;
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
