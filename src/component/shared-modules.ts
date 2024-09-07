import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { LessonRendererComponent } from './lesson-renderer/lesson-renderer.component';
import { ExerciseRendererComponent } from './exercise-renderer/exercise-renderer.component';
import { QuizRendererComponent } from './quiz-renderer/quiz-renderer.component';
@NgModule({
  declarations: [LessonRendererComponent,ExerciseRendererComponent,QuizRendererComponent],
  imports: [CommonModule,IonicModule],
  exports: [LessonRendererComponent,ExerciseRendererComponent,QuizRendererComponent]  // Export it so other modules can use it
})
export class SharedModule {}
