import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-fc-accordion-item',
  templateUrl: './fc-accordion-item.component.html',
  styleUrls: ['./fc-accordion-item.component.scss']
})
export class FcAccordionItemComponent {
  @Input() title: string = '';

  @Input() quickActionsTemplate?: TemplateRef<any>; // Aggiunto template per quickActions
  @Input() quickActions: any[] = [];

  @Input() detailData: any;

  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
