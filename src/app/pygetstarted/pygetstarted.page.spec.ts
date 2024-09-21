import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PygetstartedPage } from './pygetstarted.page';

describe('PygetstartedPage', () => {
  let component: PygetstartedPage;
  let fixture: ComponentFixture<PygetstartedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PygetstartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
