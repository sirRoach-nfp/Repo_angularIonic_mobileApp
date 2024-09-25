import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpechoPage } from './phpecho.page';

describe('PhpechoPage', () => {
  let component: PhpechoPage;
  let fixture: ComponentFixture<PhpechoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
