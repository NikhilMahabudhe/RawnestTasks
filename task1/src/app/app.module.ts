import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './components/task1/task1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Task1Component],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [Task1Component],
})
export class AppModule {}
