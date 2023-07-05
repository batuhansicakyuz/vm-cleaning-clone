import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSection } from './firstsection/firstsection.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ContactSection } from './contact/contact.component';
import { ThirdSection } from './thirdsection/thirdsection.component';
import { UberunsComponent } from './uberuns/uberuns.component';
import { LeistungenSection } from './leistungen/leistungen.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderSection } from './headersection/headersection.component';
import { StartComponent } from './start/start.component';

import { AppRoutingModule } from './app-routing.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NgxImageZoomModule } from 'ngx-image-zoom';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSection,
    ContactSection,
    ThirdSection,
    UberunsComponent,
    LeistungenSection,
    HeaderSection,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    GoogleMapsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    NgxImageZoomModule,
    FlexLayoutModule,
    NgbCarouselModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
