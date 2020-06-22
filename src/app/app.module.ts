import { NecessaryCostsListComponent } from './main-placehoder/necessary-costs-list/necessary-costs-list.component';
import { DialogComponent } from './main-placehoder/dialog/dialog.component';
import { AppComponent } from './app.component';
import { MainPlacehoderComponent } from './main-placehoder/main-placehoder.component';


import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    MainPlacehoderComponent,
    DialogComponent,
    NecessaryCostsListComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
