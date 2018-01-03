import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Module Dependencies */

/* Containers */
import { AppComponent } from './app.component';

/* Components */

/* Services */

/* Routes */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
