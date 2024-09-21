import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsWheretoPage } from './js-whereto.page';

describe('JsWheretoPage', () => {
  let component: JsWheretoPage;
  let fixture: ComponentFixture<JsWheretoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsWheretoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
