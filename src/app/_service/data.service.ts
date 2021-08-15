import {Injectable, OnInit} from '@angular/core';
import { Data } from '../_model';

@Injectable({ providedIn: 'root' })

export class DataService implements OnInit {
  balanceData: Data[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  generateData(userInput: Number[]) {
    this.balanceData = [];
    let balance: any;
    let year: number = 2020;
    let initialBalance: number = 300000;
    let previousYearContribution: number = 0;
    for (let age = 45; age <= 95; age++) {
      if (age > 45) {
        year = year + 1;
      }
      balance = this.calculateBalance(userInput, age, year, initialBalance, previousYearContribution);
      previousYearContribution = balance[0].contributions;
      initialBalance = balance[0].endBalance;
      this.balanceData.push(balance);
    }
  }

  calculateBalance(userInput: any, age: number, year: number, initialBalance: number, previousYearContribution: number): Data[] {
    const balance: Data[] = [
      {
        age: age,
        year: year,
        startBalance: initialBalance,
        contributions: 0,
        earnings: 0,
        fees: 0,
        tax: 0,
        withdrawals: 0,
        endBalance: 0
      }
    ];
    balance.map(item => {
      if (Number(userInput.contributionStop) >= item.age) {
        if (item.age === 45) {
          item.contributions = (Number(userInput.salary) * Number(userInput.contributionRate)) / 100;
        } else {
          item.contributions = previousYearContribution + (previousYearContribution * Number(userInput.inflationRate)) / 100;
        }
        item.contributions = Math.round(item.contributions);
      } else {
        item.contributions = 0;
      }
      item.earnings = ((item.startBalance + item.contributions) * Number(userInput.earnings)) / 100;
      item.earnings = Math.round(item.earnings);
      item.fees = ((item.startBalance + item.contributions + item.earnings) * Number(userInput.fees)) / 100;
      item.fees = Math.round(item.fees);
      item.tax = ((item.contributions + item.earnings) * Number(userInput.tax)) / 100;
      item.tax = Math.round(item.tax);
      if (Number(userInput.withdrawalBegin) <= item.age) {
        item.withdrawals = (item.startBalance * Number(userInput.withdrawalRate)) / 100;
      } else {
        item.withdrawals = 0;
      }
      item.withdrawals = Math.round(item.withdrawals);
      item.endBalance = (item.startBalance + item.contributions + item.earnings) - (item.fees + item.tax + item.withdrawals);
      item.endBalance = Math.round(item.endBalance);
    });
    return balance;
  }

   getData(): Data[]  {
     return ([] as Data[]).concat(...this.balanceData);
   }

}
