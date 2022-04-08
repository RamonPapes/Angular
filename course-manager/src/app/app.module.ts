import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarComponent } from './shared/component/star/star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch: 'full'
      },
      {
        path: '**', component: Error404component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
