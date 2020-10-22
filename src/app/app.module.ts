import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FilterPipe } from './services/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UserListService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [HttpClientModule,UserListService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
