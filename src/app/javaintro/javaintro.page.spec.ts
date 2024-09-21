import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavaintroPage } from './javaintro.page';

describe('JavaintroPage', () => {
  let component: JavaintroPage;
  let fixture: ComponentFixture<JavaintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
