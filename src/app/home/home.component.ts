import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 titles:string[]=['Personal Finances','Banking & Coverage','Consumer Payments'];
 descriptions:string[]=[
  `Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.`
    ,`With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.`
    ,`It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.`
  ]
  Images:string[]=[
    '../../assets/Images/home/desktop/icon-personal-finances.svg',
    '../../assets/Images/home/desktop/icon-banking-and-coverage.svg',
    '../../assets/Images/home/desktop/icon-consumer-payments.svg'

  ]
}
