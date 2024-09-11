import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { LessonRendererComponent } from './lesson-renderer/lesson-renderer.component';
import { ExerciseRendererComponent } from './exercise-renderer/exercise-renderer.component';
import { QuizRendererComponent } from './quiz-renderer/quiz-renderer.component';
import { SelectionModalComponent } from './selection-modal/selection-modal.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@NgModule({
  declarations: [LessonRendererComponent,ExerciseRendererComponent,QuizRendererComponent,SelectionModalComponent],
  imports: [CommonModule,IonicModule,FormsModule],
  exports: [LessonRendererComponent,ExerciseRendererComponent,QuizRendererComponent,SelectionModalComponent,FormsModule]  // Export it so other modules can use it
})
export class SharedModule {}
