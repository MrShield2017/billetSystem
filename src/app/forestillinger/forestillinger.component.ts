import { Component, OnInit } from '@angular/core';
import forestilling from './Forestilling';
import { ForestillingService } from './forestilling.service';

@Component({
  selector: 'app-forestillinger',
  templateUrl: './forestillinger.component.html',
  providers: [ ForestillingService ],
  styleUrls: ['./forestillinger.component.css']
})
export class ForestillingerComponent implements OnInit {
  private forestillinger: forestilling[];

  constructor(private forestillingService: ForestillingService) { }

  ngOnInit() {
    this.getForestillinger();
  }
  getForestillinger() {
    this.forestillingService.getForestillinger()
      .subscribe(forestillinger => this.forestillinger = forestillinger);
      console.log(this.forestillinger);
  }
  bestil(f: forestilling) {
    alert("Bestillet billet til " + f.titel);
  }
}
