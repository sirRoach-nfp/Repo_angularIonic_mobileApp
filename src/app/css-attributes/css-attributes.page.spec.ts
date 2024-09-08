import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssAttributesPage } from './css-attributes.page';

describe('CssAttributesPage', () => {
  let component: CssAttributesPage;
  let fixture: ComponentFixture<CssAttributesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAttributesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
