import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-star',
  imports: [],
  templateUrl: './head-star.component.html',
  styleUrl: './head-star.component.css'
})
export class HeadStarComponent {
  @Input() title: string = '';
  @Input() bgColor: string = '';
}
