import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLyingDownComponent } from './modules/core/design-system/menu-lying-down/menu-lying-down.component';
import { HomeComponent } from './modules/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLyingDownComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
