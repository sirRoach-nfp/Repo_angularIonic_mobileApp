import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PyPage } from './py.page';

describe('PyPage', () => {
  let component: PyPage;
  let fixture: ComponentFixture<PyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
