import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {

  // *************** owl-carousel ***********************
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  dots: true,
  navSpeed: 900,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: false
}


}
