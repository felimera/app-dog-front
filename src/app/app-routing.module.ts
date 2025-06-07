import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PetComponent } from './modules/pet/pet/pet.component';
import { RevisionComponent } from './modules/revision/revision/revision.component';
import { ServiceCardComponent } from './modules/core/design-system/service-card/service-card.component';
import { ContactComponent } from './modules/contact/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'tarjetas', component: ServiceCardComponent },
      { path: 'mascota', component: PetComponent },
      { path: 'revision', component: RevisionComponent }
    ]
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  { path: '**', redirectTo: 'home/tarjetas' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
