import { Component, OnInit, ChangeDetectorRef, ViewChild, HostListener, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ObservableMedia } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showVar:boolean = false;

  @Input()showMe:boolean;
  @ViewChild('start') sidenav: MatSidenav;
  ngOnInit() {
  }

  sideNav(start: any) {
    this.toggleMe();
    start.toggle();
  }

  toggleMe(){
    this.showVar = !this.showVar;

  }
}
