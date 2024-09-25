import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpintroPage } from './phpintro.page';

describe('PhpintroPage', () => {
  let component: PhpintroPage;
  let fixture: ComponentFixture<PhpintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
