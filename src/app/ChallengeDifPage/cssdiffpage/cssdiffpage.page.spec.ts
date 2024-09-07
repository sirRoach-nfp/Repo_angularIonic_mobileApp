import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CSSdiffpagePage } from './cssdiffpage.page';

describe('CSSdiffpagePage', () => {
  let component: CSSdiffpagePage;
  let fixture: ComponentFixture<CSSdiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSdiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
