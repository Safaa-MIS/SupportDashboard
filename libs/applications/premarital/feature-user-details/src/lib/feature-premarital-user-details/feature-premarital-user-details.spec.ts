import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePremaritalUserDetails } from './feature-premarital-user-details';

describe('FeaturePremaritalUserDetails', () => {
  let component: FeaturePremaritalUserDetails;
  let fixture: ComponentFixture<FeaturePremaritalUserDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePremaritalUserDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePremaritalUserDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
