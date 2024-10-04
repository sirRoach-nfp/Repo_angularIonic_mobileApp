import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppoutputPage } from './cppoutput.page';

describe('CppoutputPage', () => {
  let component: CppoutputPage;
  let fixture: ComponentFixture<CppoutputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppoutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
