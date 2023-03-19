import { useQuery } from '@tanstack/react-query';
import req from '@/request/KyRequest';

const useSongsQuery = () => {
  return useQuery({
    queryFn: () => req(),
    queryKey: ['songs', 'all'],
    onError: (err) => {
      if (err instanceof Error) {
        // console.log(err.message);
      }
    },
  });
};

export default useSongsQuery;
