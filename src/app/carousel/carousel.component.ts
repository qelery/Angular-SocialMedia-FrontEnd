import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slideImageUrls: string[];

  constructor() {
    // To keep slides consistent, image resolution should be 1920px x 600px
    this.slideImageUrls = [
      '/assets/images/placeholder.png',
      '/assets/images/placeholder2.png',
      '/assets/images/placeholder3.png',
      '/assets/images/placeholder4.png',
    ];
  }

  ngOnInit(): void {
  }

}
