export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description:
      'A large phone with one of the best screens, and easy to enjoy all your multimedia contents.',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description:
      'A great phone with one of the best cameras, and easy to carry with.',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
