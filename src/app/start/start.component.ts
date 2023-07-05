import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-first',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
mapOptions: google.maps.MapOptions = {
    center: { lat: 52.52346922653795, lng: 13.413399073765264 },
    zoom: 12,
    zoomControl: false,
       mapTypeControl: false,
       streetViewControl: false,
       fullscreenControl: false
  };
showFiller = false;

//this is a variable that hold number
  projectcount:number = 0;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==287)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },50) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 95)
    {

      clearInterval(this.accuratecountstop);
    }
  },50)


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 300)
    {

      clearInterval(this.clientcountstop);
    }
  },50)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 100)
    {

      clearInterval(this.customerfeedbackstop);
    }
  },70)
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
