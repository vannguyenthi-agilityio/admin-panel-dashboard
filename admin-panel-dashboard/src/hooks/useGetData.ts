import {
  useCallback,
  useState
} from 'react';
import { MESSAGES_ERROR } from '@/constants';
import {
  fetchDataFromAPI,
} from '@/services';

const useGetData = () => {
  const [loading, setLoading] = useState(false);
  // Get data
 const getData = useCallback(async (onError: (error: Error) => void) => {
  setLoading(true);

  try {
    const customerData = await fetchDataFromAPI();
    if (!customerData) {
      throw new Error('Error');
    }
    return customerData;
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error(MESSAGES_ERROR.UNKNOWN_ERROR));
    }

    // Return an empty array in case of error
    return [];
  } finally {
    setLoading(false);
  }}, [])

  return {getData, loading}
}
export default useGetData;
