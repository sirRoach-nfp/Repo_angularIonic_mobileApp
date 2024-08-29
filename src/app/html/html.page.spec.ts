import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlPage } from './html.page';

describe('HtmlPage', () => {
  let component: HtmlPage;
  let fixture: ComponentFixture<HtmlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
