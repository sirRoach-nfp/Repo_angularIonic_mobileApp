import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PyvariablesPage } from './pyvariables.page';

describe('PyvariablesPage', () => {
  let component: PyvariablesPage;
  let fixture: ComponentFixture<PyvariablesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PyvariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
