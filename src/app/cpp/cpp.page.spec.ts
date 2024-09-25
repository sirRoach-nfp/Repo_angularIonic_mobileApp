import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppPage } from './cpp.page';

describe('CppPage', () => {
  let component: CppPage;
  let fixture: ComponentFixture<CppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
