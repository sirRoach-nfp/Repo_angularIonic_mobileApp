import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HTMLdiffpagePage } from './htmldiffpage.page';

describe('HTMLdiffpagePage', () => {
  let component: HTMLdiffpagePage;
  let fixture: ComponentFixture<HTMLdiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLdiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
