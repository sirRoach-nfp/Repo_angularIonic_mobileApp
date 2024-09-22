import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpsyntaxPage } from './phpsyntax.page';

describe('PhpsyntaxPage', () => {
  let component: PhpsyntaxPage;
  let fixture: ComponentFixture<PhpsyntaxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpsyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
