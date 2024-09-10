import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsIntroPage } from './js-intro.page';

describe('JsIntroPage', () => {
  let component: JsIntroPage;
  let fixture: ComponentFixture<JsIntroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
