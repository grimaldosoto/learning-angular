import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  description: string;
  life: number;
  male_weight: number;
  female_weight: number;
  hypoallergenic: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  dogs: Dog[] = [
    {
      name: 'Caucasian Shepherd Dog',
      description:
        'The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.',
      life: 20,
      male_weight: 50,
      female_weight: 45,
      hypoallergenic: false,
    },
    {
      name: 'Caucasian Shepherd Dog 1',
      description:
        'The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.',
      life: 20,
      male_weight: 50,
      female_weight: 45,
      hypoallergenic: false,
    },
    {
      name: 'Caucasian Shepherd Dog 2',
      description:
        'The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.',
      life: 20,
      male_weight: 50,
      female_weight: 45,
      hypoallergenic: false,
    },
  ];

  constructor() {}
}
