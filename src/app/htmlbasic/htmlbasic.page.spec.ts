import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlbasicPage } from './htmlbasic.page';

describe('HtmlbasicPage', () => {
  let component: HtmlbasicPage;
  let fixture: ComponentFixture<HtmlbasicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlbasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
