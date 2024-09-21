import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PyintroPage } from './pyintro.page';

describe('PyintroPage', () => {
  let component: PyintroPage;
  let fixture: ComponentFixture<PyintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PyintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
