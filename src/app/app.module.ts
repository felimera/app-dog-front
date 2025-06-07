import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLyingDownComponent } from './modules/core/design-system/menu-lying-down/menu-lying-down.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ServiceCardComponent } from './modules/core/design-system/service-card/service-card.component';
import { PetComponent } from './modules/pet/pet/pet.component';
import { RevisionComponent } from './modules/revision/revision/revision.component';
import { CardComponent } from './modules/core/design-system/card/card.component';
import { ContactComponent } from './modules/contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLyingDownComponent,
    HomeComponent,
    ServiceCardComponent,
    PetComponent,
    RevisionComponent,
    CardComponent,
    ContactComponent
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
