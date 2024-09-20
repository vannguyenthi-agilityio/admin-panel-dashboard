import { getErrorMessage } from "@/helpers";

type MethodRequest = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const apiRequest = async <T, K = null>(
  path: string,
  method: MethodRequest,
  data?: K,
) => {
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  const request = await fetch(path, requestOptions);

  if (!request.ok) throw new Error(getErrorMessage(request.status, request.statusText));

  const responseData = await request.json();

  return responseData as T;
};
