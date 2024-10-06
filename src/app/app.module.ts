import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { StoreDevtools } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LessonRendererComponent } from 'src/component/lesson-renderer/lesson-renderer.component';
import { SharedModule } from 'src/component/shared-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


//import { ExerciseServiceService } from './GPTservice/exercise-service.service';
@NgModule({
  schemas:[NO_ERRORS_SCHEMA],
  declarations: [AppComponent],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, StoreModule.forRoot({user:userReducer}), StoreDevtoolsModule.instrument({
    maxAge: 30,
    logOnly: environment.production
  }),SharedModule,BrowserAnimationsModule,AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule,AngularFirestoreModule],




  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
