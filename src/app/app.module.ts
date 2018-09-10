import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WellnessComponent } from './wellness/wellness.component';
import { HealthVitalsComponent } from './health-vitals/health-vitals.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { GenomicsComponent } from './genomics/genomics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
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
    GenomicsComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
