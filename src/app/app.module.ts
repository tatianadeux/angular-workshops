import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { HomeComponent } from './components/home/home.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { LoginformComponent } from './components/loginform/loginform.component';
import { AddFormComponent } from './components/reactive-forms/add-form/add-form.component';
import { ArticleComponent } from './components/reactive-forms/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    GroceryComponent,
    HomeComponent,
    StudentViewComponent,
    PageNotFoundComponent,
    LoginformComponent,
    AddFormComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
