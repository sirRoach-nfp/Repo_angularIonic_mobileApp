import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavadiffpagePage } from './javadiffpage.page';

describe('JavadiffpagePage', () => {
  let component: JavadiffpagePage;
  let fixture: ComponentFixture<JavadiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JavadiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
