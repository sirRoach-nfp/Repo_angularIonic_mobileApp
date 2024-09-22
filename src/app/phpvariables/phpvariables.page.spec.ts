import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpvariablesPage } from './phpvariables.page';

describe('PhpvariablesPage', () => {
  let component: PhpvariablesPage;
  let fixture: ComponentFixture<PhpvariablesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpvariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
