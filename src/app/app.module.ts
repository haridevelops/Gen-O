import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WellnessComponent } from './wellness/wellness.component';
import { HealthVitalsComponent } from './health-vitals/health-vitals.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { GenomicsComponent } from './genomics/genomics.component';
import { DigitalHealthComponent } from './digital-health/digital-health.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'digital',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'genomics',
        pathMatch: 'full'
      },
      {
        path: 'health-vitals',
        component: HealthVitalsComponent
      },
      {
        path: 'lifestyle',
        component: LifestyleComponent
      },
      {
        path: 'genomics',
        component: GenomicsComponent
      }
    ]
  },
  {
    path: 'wellness',
    component: WellnessComponent
  },
  {
    path: 'digital',
    component: DigitalHealthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WellnessComponent,
    HealthVitalsComponent,
    LifestyleComponent,
    GenomicsComponent,
    DigitalHealthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTabsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
