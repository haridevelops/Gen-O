import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  enableLinkMyReport: boolean
  constructor(public router: Router) { }

  ngOnInit() {
  }

  public chk_LinkMyreport(val: boolean) {
    this.enableLinkMyReport = val;

  }

  public trackProgress() {
    this.router.navigate(['/wellness'], { queryParams: { component: 'lifestyle'} });
  }
}
