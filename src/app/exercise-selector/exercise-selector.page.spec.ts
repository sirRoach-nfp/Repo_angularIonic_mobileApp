import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseSelectorPage } from './exercise-selector.page';

describe('ExerciseSelectorPage', () => {
  let component: ExerciseSelectorPage;
  let fixture: ComponentFixture<ExerciseSelectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
