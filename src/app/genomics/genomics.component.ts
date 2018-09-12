import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genomics',
  templateUrl: './genomics.component.html',
  styleUrls: ['./genomics.component.css']
})
export class GenomicsComponent implements OnInit {

  enableLinkMyReport: boolean;
  showRiskReport: boolean;
  showDetailReport: boolean;

  constructor() { }

  ngOnInit() { }

  public chk_LinkMyreport(val: boolean) {
    this.enableLinkMyReport = val;
    this.showDetailReport = false;
  }

  public linkReport() {
    this.showRiskReport = true;
  }

  public linkDetails() {
    this.showDetailReport = true;
  }
}
