import {Component, EventEmitter, Output} from '@angular/core';
import type {InvestmentInput} from "../investment-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})

export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  constructor(private investmentService: InvestmentService) {}

  investment: InvestmentInput = {
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    initialInvestment: 0
  };

  onSubmit(): void {
    this.investmentService.calculateInvestmentResults(this.investment)
  }
}
