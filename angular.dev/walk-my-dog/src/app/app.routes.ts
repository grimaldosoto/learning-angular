import { Routes } from '@angular/router';
import { DogListComponent } from './dog-list.component';
import { DogViewComponent } from './dog-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogListComponent },
  { path: 'details/:index', component: DogViewComponent },
];
