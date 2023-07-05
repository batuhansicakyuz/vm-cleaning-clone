import { Component } from '@angular/core';

@Component({
  selector: 'leistungen-section',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.css']
})
export class LeistungenSection {
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
