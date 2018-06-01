import { Component, OnInit } from '@angular/core';
import forestilling from './Forestilling';
import { ForestillingService } from './forestilling.service';
import { BestillingService } from '../bestilling/bestilling.service';

@Component({
  selector: 'app-forestillinger',
  templateUrl: './forestillinger.component.html',
  providers: [ ForestillingService ],
  styleUrls: ['./forestillinger.component.css']
})
export class ForestillingerComponent implements OnInit {
  private forestillinger: forestilling[];

  constructor(private forestillingService: ForestillingService, private bestillingService: BestillingService) { }

  ngOnInit() {
    this.getForestillinger();
  }
  getForestillinger() {
    this.forestillingService.getForestillinger()
      .subscribe(forestillinger => this.forestillinger = forestillinger);
  }
  bestil(f: forestilling) {
    this.bestillingService.valgtForstilling(f);
  }
}
