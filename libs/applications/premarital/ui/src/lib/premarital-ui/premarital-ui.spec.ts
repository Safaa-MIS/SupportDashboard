import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremaritalUi } from './premarital-ui';

describe('PremaritalUi', () => {
  let component: PremaritalUi;
  let fixture: ComponentFixture<PremaritalUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremaritalUi],
    }).compileComponents();

    fixture = TestBed.createComponent(PremaritalUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
