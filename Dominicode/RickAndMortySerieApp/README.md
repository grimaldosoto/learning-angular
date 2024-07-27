# RickAndMortySerieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

    "paths": {
      "@app/*": ["src/app/*"],
      "@shared/*": ["src/app/shared/*"],
      "@environment/*": ["src/environments/*"],
      "@characters/*": ["src/app/components/pages/characters/*"],
      "@pages/*": ["src/app/components/pages/*"]
    }

Estructura del proyecto

ng g c shared/components/header
ng g c shared/components/formSearch
ng g m components/pages/home -m=app --route home
ng g m components/pages/characters
ng g m components/pages/characters/character-list -m=app --route character-list
ng g m components/pages/characters/character-details -m=app --route character-details

