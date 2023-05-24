import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaysComponent } from './plays/plays.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ActorsComponent } from './actors/actors.component';
import { AddplayComponent } from './plays/AddPlay/addplay/addplay.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { UpdatePlayComponent } from './plays/update-play/update-play.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaysComponent,
    DashbordComponent,
    ActorsComponent,
    AddplayComponent,
    CategoryComponent,
    UpdatePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
