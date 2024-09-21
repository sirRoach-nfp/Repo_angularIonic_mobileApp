import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PysyntaxPage } from './pysyntax.page';

describe('PysyntaxPage', () => {
  let component: PysyntaxPage;
  let fixture: ComponentFixture<PysyntaxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PysyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
