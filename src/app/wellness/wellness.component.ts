import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements OnInit {
  viewComponent: string;
  constructor(public router: ActivatedRoute) { 
    this.viewComponent = null;
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.viewComponent = params['component'];
    })
  }

  showComponent() {
    return this.viewComponent === 'health-vitals' ? true : false;
  }

}
