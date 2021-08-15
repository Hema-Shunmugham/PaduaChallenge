import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to input screen on clicking goBack()', () => {
    router.navigate(["/"]).then(() => {
      expect(location.path()).toBe("/");
    });
  });
});
