import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpdiffpagePage } from './phpdiffpage.page';

describe('PhpdiffpagePage', () => {
  let component: PhpdiffpagePage;
  let fixture: ComponentFixture<PhpdiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpdiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
