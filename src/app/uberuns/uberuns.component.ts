import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'uberuns-section',
  templateUrl: './uberuns.component.html',
  styleUrls: ['./uberuns.component.css']
})
export class UberunsComponent {
mapOptions: google.maps.MapOptions = {
    center: { lat: 52.52346922653795, lng: 13.413399073765264 },
    zoom: 12,
    zoomControl: false,
       mapTypeControl: false,
       streetViewControl: false,
       fullscreenControl: false
  };

panelOpenState = false;

showFiller = false;

}
