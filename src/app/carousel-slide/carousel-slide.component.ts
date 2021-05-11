import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent implements OnInit {

  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
