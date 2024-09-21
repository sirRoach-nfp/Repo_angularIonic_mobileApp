import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavasyntaxPage } from './javasyntax.page';

describe('JavasyntaxPage', () => {
  let component: JavasyntaxPage;
  let fixture: ComponentFixture<JavasyntaxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JavasyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
