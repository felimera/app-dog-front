import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PetComponent } from './modules/pet/pet/pet.component';
import { RevisionComponent } from './modules/revision/revision/revision.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'mascota', component: PetComponent },
      { path: 'revision', component: RevisionComponent }
    ]
  },
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
