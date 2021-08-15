/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { InputComponent } from './input.component';
import { Location } from "@angular/common";
import {ReactiveFormsModule, FormsModule, AbstractControl} from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard screen on clicking generateProjection()', () => {
    router.navigate(["/dashboard"]).then(() => {
      expect(location.path()).toBe("/dashboard");
    });
  });

  it('form invalid when empty', () => {
    expect(component.inputForm.valid).toBeFalsy();
  });

  it('salary field validity', () => {
    let salary = component.inputForm.controls['salary'];
    expect(salary.valid).toBeFalsy();
    salary.setValue("");
    expect(salary.hasError('required')).toBeTruthy();
    salary.setValue("A");
    expect(salary.hasError('pattern')).toBeTruthy();
  });

  it('contributionRate field validity', () => {
    let contributionRate = component.inputForm.controls['contributionRate'];
    expect(contributionRate.valid).toBeFalsy();
    contributionRate.setValue("");
    expect(contributionRate.hasError('required')).toBeTruthy();
    contributionRate.setValue("A");
    expect(contributionRate.hasError('pattern')).toBeTruthy();
    contributionRate.setValue(9.5);
    expect(contributionRate.hasError('pattern')).toBeFalsy();
  });
  it('inflationRate field validity', () => {
    let inflationRate = component.inputForm.controls['inflationRate'];
    expect(inflationRate.valid).toBeFalsy();
    inflationRate.setValue("");
    expect(inflationRate.hasError('required')).toBeTruthy();
    inflationRate.setValue("A");
    expect(inflationRate.hasError('pattern')).toBeTruthy();
    inflationRate.setValue(3);
    expect(inflationRate.hasError('pattern')).toBeFalsy();
  });
  it('earnings field validity', () => {
    let earnings = component.inputForm.controls['earnings'];
    expect(earnings.valid).toBeFalsy();
    earnings.setValue("");
    expect(earnings.hasError('required')).toBeTruthy();
    earnings.setValue("A");
    expect(earnings.hasError('pattern')).toBeTruthy();
    earnings.setValue(7.5);
    expect(earnings.hasError('pattern')).toBeFalsy();
  });
  it('fees field validity', () => {
    let fees = component.inputForm.controls['fees'];
    expect(fees.valid).toBeFalsy();
    fees.setValue("");
    expect(fees.hasError('required')).toBeTruthy();
    fees.setValue("A");
    expect(fees.hasError('pattern')).toBeTruthy();
    fees.setValue(1.5);
    expect(fees.hasError('pattern')).toBeFalsy();
  });
  it('tax field validity', () => {
    let tax = component.inputForm.controls['tax'];
    expect(tax.valid).toBeFalsy();
    tax.setValue("");
    expect(tax.hasError('required')).toBeTruthy();
    tax.setValue("A");
    expect(tax.hasError('pattern')).toBeTruthy();
    tax.setValue(15);
    expect(tax.hasError('pattern')).toBeFalsy();
  });
  it('withdrawalRate field validity', () => {
    let withdrawalRate = component.inputForm.controls['withdrawalRate'];
    expect(withdrawalRate.valid).toBeFalsy();
    withdrawalRate.setValue("");
    expect(withdrawalRate.hasError('required')).toBeTruthy();
    withdrawalRate.setValue("A");
    expect(withdrawalRate.hasError('pattern')).toBeTruthy();
    withdrawalRate.setValue(6);
    expect(withdrawalRate.hasError('pattern')).toBeFalsy();
  });
  it('withdrawalBegin field validity', () => {
    let withdrawalBegin = component.inputForm.controls['withdrawalBegin'];
    expect(withdrawalBegin.valid).toBeFalsy();
    withdrawalBegin.setValue("");
    expect(withdrawalBegin.hasError('required')).toBeTruthy();
    withdrawalBegin.setValue("A");
    expect(withdrawalBegin.hasError('pattern')).toBeTruthy();
    withdrawalBegin.setValue(66);
    expect(withdrawalBegin.hasError('pattern')).toBeFalsy();
  });
  it('contributionStop field validity', () => {
    let contributionStop = component.inputForm.controls['contributionStop'];
    expect(contributionStop.valid).toBeFalsy();
    contributionStop.setValue("");
    expect(contributionStop.hasError('required')).toBeTruthy();
    contributionStop.setValue("A");
    expect(contributionStop.hasError('pattern')).toBeTruthy();
    contributionStop.setValue(65);
    expect(contributionStop.hasError('pattern')).toBeFalsy();
  });

});
