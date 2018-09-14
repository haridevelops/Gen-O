import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-vitals',
  templateUrl: './health-vitals.component.html',
  styleUrls: ['./health-vitals.component.css']
})
export class HealthVitalsComponent implements OnInit {

  enableLinkMyReport: boolean
  constructor(public router: Router) { }

  ngOnInit() {
  }
  public chk_LinkMyreport(val: boolean) {
    this.enableLinkMyReport = val;
  }

  public trackProgress() {
    this.router.navigate(['/wellness'], { queryParams: { component: 'health-vitals'} });
  }
}
