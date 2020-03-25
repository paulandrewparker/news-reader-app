import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [ AppComponent, HelloComponent ],
  imports:      [ BrowserModule, FormsModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
