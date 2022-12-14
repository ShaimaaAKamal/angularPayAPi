import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plansTitles:string[]=['Free Plan','Basic Plan','Premium Plan'];
  planDecriptions:string[]=[`Build and test using our core set of products with up to 100 API requests`,
                          `Launch your project with unlimited requests and no contractual minimums`,
                          `Get tailored solutions, volume pricing, and dedicated support for your team`];
  planPrices:string[]=['$0.00','$249.00','$499.00'];
  plansOptions:boolean[][]=[
    [false,false,false,false],[true,true,false,false],[true,true,true,true]
  ]
  planOptionsTitles:string[]=['Investments','Assets','Liabilities','Income']
}
