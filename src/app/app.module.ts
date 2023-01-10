import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { of } from "rxjs";
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from "@taiga-ui/i18n";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU'
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
