import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssBasicPage } from './css-basic.page';

describe('CssBasicPage', () => {
  let component: CssBasicPage;
  let fixture: ComponentFixture<CssBasicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
