import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsStatementsPage } from './js-statements.page';

describe('JsStatementsPage', () => {
  let component: JsStatementsPage;
  let fixture: ComponentFixture<JsStatementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsStatementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
