import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

const url = (path: string) => new URL(path, 'http://localhost:3000').toString();

export const handlers = [
  http.get(url('/api/resource'), () =>
    HttpResponse.json({
      status: 200,
      value: [
        {
          id: 1,
          first_name: 'Jeanette',
          last_name: 'Penddreth',
          email: 'jpenddreth0@census.gov',
          gender: 'Female',
        },
        {
          id: 2,
          first_name: 'Giavani',
          last_name: 'Frediani',
          email: 'gfrediani1@senate.gov',
          gender: 'Male',
        },
        {
          id: 3,
          first_name: 'Noell',
          last_name: 'Bea',
          email: 'nbea2@imageshack.us',
          gender: 'Female',
        },
        {
          id: 4,
          first_name: 'Willard',
          last_name: 'Valek',
          email: 'wvalek3@vk.com',
          gender: 'Male',
        },
        {
          id: 5,
          first_name: 'John',
          last_name: 'Doe',
          email: 'jdoe5@vk.com',
          gender: 'Male',
        },
        {
          id: 6,
          first_name: 'Jane',
          last_name: 'Doe',
          email: 'janedoe6@vk.com',
          gender: 'Female',
        },
      ],
    })
  ),
];
