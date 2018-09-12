import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-health',
  templateUrl: './digital-health.component.html',
  styleUrls: ['./digital-health.component.css']
})
export class DigitalHealthComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateTo(page: string) {
    this.router.navigate(['/home', page]);
  }
}
