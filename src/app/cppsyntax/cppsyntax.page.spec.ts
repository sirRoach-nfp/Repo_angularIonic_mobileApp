import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppsyntaxPage } from './cppsyntax.page';

describe('CppsyntaxPage', () => {
  let component: CppsyntaxPage;
  let fixture: ComponentFixture<CppsyntaxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
