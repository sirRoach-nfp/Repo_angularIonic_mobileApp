import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppvariablesPage } from './cppvariables.page';

describe('CppvariablesPage', () => {
  let component: CppvariablesPage;
  let fixture: ComponentFixture<CppvariablesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppvariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
