import { useQuery } from '@tanstack/vue-query';
import axios, { type AxiosResponse } from 'axios';

export type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Male' | 'Female';
};

export const useResource = () => {
  const { data } = useQuery({
    queryKey: ['resource'],
    select: (data) =>
      data.data.value.filter((person: Person) => person.id % 2 === 0),
    queryFn: (): Promise<AxiosResponse<{ status: number; value: Person[] }>> =>
      axios.get('http://localhost:3000/api/resource'),
  });

  const personList = computed(() => data.value);

  return { personList };
};
