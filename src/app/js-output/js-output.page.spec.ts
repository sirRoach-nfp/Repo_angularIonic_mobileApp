import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsOutputPage } from './js-output.page';

describe('JsOutputPage', () => {
  let component: JsOutputPage;
  let fixture: ComponentFixture<JsOutputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsOutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
