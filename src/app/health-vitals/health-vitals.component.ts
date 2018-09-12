import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-vitals',
  templateUrl: './health-vitals.component.html',
  styleUrls: ['./health-vitals.component.css']
})
export class HealthVitalsComponent implements OnInit {

  enableLinkMyReport: boolean
  constructor() { }

  ngOnInit() {
  }
  public chk_LinkMyreport(val: boolean) {
    this.enableLinkMyReport = val;
  }
}
