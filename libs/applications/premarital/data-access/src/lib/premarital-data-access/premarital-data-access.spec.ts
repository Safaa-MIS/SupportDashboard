import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremaritalDataAccess } from './premarital-data-access';

describe('PremaritalDataAccess', () => {
  let component: PremaritalDataAccess;
  let fixture: ComponentFixture<PremaritalDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremaritalDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(PremaritalDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
