import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Male' | 'Female';
};

export const useResource = () => {
  const { data } = useQuery({
    queryKey: ['resource'],
    queryFn: (): Promise<Person[]> =>
      axios.get('http://localhost:3000/api/resource'),
  });

  const personList = computed(() => ({
    list: data.value,
  }));

  return { personList };
};
