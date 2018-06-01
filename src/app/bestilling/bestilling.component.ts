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
  navn: String = '';
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
      booking: [{
        price: 123,
        subject: this.titel,
        name: this.artist,
        text: this.beskrivelse,
        date: this.dato
        }],
      user: [{
        mail: this.mail,
        name: this.navn
        }]
    });
    this._bs.postTest(json).subscribe(data => this.postData = JSON.stringify(data) );
  }
}
