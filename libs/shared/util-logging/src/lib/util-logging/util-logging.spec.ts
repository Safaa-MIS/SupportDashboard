import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilLogging } from './util-logging';

describe('UtilLogging', () => {
  let component: UtilLogging;
  let fixture: ComponentFixture<UtilLogging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilLogging],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilLogging);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
