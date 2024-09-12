import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssElementPage } from './css-element.page';

describe('CssElementPage', () => {
  let component: CssElementPage;
  let fixture: ComponentFixture<CssElementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CssElementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
