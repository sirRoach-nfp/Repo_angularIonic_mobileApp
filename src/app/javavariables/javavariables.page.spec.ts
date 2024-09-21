import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavavariablesPage } from './javavariables.page';

describe('JavavariablesPage', () => {
  let component: JavavariablesPage;
  let fixture: ComponentFixture<JavavariablesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JavavariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
