import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  enableLinkMyReport: boolean
  constructor() { }

  ngOnInit() {
  }

  public chk_LinkMyreport(val: boolean) {
    this.enableLinkMyReport = val;

  }
}
