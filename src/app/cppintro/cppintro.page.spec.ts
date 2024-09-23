import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppintroPage } from './cppintro.page';

describe('CppintroPage', () => {
  let component: CppintroPage;
  let fixture: ComponentFixture<CppintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
