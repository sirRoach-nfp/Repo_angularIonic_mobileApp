import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlintroPage } from './htmlintro.page';

describe('HtmlintroPage', () => {
  let component: HtmlintroPage;
  let fixture: ComponentFixture<HtmlintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
