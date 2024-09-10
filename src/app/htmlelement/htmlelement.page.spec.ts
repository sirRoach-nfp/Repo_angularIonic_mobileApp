import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlelementPage } from './htmlelement.page';

describe('HtmlelementPage', () => {
  let component: HtmlelementPage;
  let fixture: ComponentFixture<HtmlelementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlelementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
