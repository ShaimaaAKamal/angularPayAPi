import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: ['./price-plan.component.scss']
})
export class PricePlanComponent {
 @Input() title: string;
 @Input() children: string;
 @Input() price: string;
 @Input() planOptionsTitles:string[];
 @Input() planOptions:boolean[];
}
