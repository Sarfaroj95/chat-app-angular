import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChattBodyComponent } from './chatt-body/chatt-body.component';
import { LoginComponent } from './auth/login/login.component';
import { LeftSideComponent } from './chatt-body/left-side/left-side.component';
import { ChatHeaderComponent } from './chatt-body/chat-header/chat-header.component';
import { ChatMessagesComponent } from './chatt-body/chat-messages/chat-messages.component';
import { ChatFooterComponent } from './chatt-body/chat-footer/chat-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './service/services.service';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from './materials/materials.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    ChattBodyComponent,
    LoginComponent,
    LeftSideComponent,
    ChatHeaderComponent,
    ChatMessagesComponent,
    ChatFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
    PickerModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
