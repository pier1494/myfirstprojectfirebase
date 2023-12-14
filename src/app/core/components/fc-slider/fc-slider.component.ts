import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FcSliderItem {
  title: string;
  imgThumb: string;
  description: string;
  id: string;
}

@Component({
  selector: 'app-fc-slider',
  templateUrl: './fc-slider.component.html',
  styleUrls: ['./fc-slider.component.scss']
})
export class FcSliderComponent {
  @Input() items: FcSliderItem[] = [];
  @Output() itemClicked = new EventEmitter<string>();

  onItemClicked(id: string): void {
    this.itemClicked.emit(id);
  }
}
