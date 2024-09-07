import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercisePagePage } from './exercise-page.page';

describe('ExercisePagePage', () => {
  let component: ExercisePagePage;
  let fixture: ComponentFixture<ExercisePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
