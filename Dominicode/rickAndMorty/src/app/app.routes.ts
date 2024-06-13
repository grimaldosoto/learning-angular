import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'character-list',
    loadChildren: () =>
      import('./views/pages/characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: 'character-details/:id',
    loadChildren: () =>
      import('./views/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule),
  }
];
