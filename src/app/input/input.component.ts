import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from "../_service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputForm = new FormGroup({
    salary: new FormControl(''),
    contributionRate: new FormControl(''),
    inflationRate: new FormControl(''),
    earnings: new FormControl(''),
    fees: new FormControl(''),
    tax: new FormControl(''),
    withdrawalRate: new FormControl('')
  });
  loading = false;
  submitted = false;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      salary: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      contributionRate: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      inflationRate: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      earnings: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      fees: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      tax: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      withdrawalRate: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      withdrawalBegin: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      contributionStop: ['', [Validators.required, Validators.pattern(this.numRegex)]],
    });
  }
  get f() { return this.inputForm.controls; }
  generateProjection() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.inputForm.invalid) {
      return;
    }
    this.loading = true;
    this.dataService.generateData(this.inputForm.value);
    const balanceData = this.dataService.getData();
    if (balanceData && balanceData.length > 0) {
      this.router.navigate(['dashboard']);
    }
  }
}
