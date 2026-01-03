import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePremaritalDashboard } from './feature-premarital-dashboard';

describe('FeaturePremaritalDashboard', () => {
  let component: FeaturePremaritalDashboard;
  let fixture: ComponentFixture<FeaturePremaritalDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePremaritalDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePremaritalDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
