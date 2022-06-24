import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';
import { LightningIconComponent } from './shared/icons/lightning-icon/lightning-icon.component';

/** Intercept all HTTP requests and return mock data */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LightningIconComponent,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
