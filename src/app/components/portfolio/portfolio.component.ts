import { Component } from '@angular/core';
import { HeadStarComponent } from "../head-star/head-star.component";

@Component({
  selector: 'app-portfolio',
  imports: [HeadStarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imagesArr: string[] = ['/images/poert1.png', '/images/port2.png', '/images/port3.png', '/images/poert1.png', '/images/port2.png', '/images/port3.png']
  isClicked: boolean = false;
  imgUrl: string = '';
  showModal(imageSrc: string) {
    this.imgUrl = imageSrc;
    if (this.isClicked) {
      this.isClicked = false;
    } else {
      this.isClicked = true;
    }
  }
}
