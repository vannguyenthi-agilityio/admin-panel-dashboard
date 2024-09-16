import { API_ROUTES } from '@/constants';

import {
  ICustomerData,
} from '@/types';

import { apiRequest } from '.';

// Get data from MockAPI
export const get = async <T>(url: string): Promise<T> => {
  return await apiRequest<T>(url, 'GET');
}

export const geted = async <ICustomerData>(url: string): Promise<ICustomerData> => {
  return await apiRequest<ICustomerData>(url, 'GET');
}

// Put data from MockAPI
export const put = async (url: string, data: ICustomerData) => {
  return await apiRequest<ICustomerData, ICustomerData>(
    url,
    'PUT',
    data
  );
}

export const deleted = async (url: string, data: ICustomerData) => {
  return await apiRequest<ICustomerData, ICustomerData>(
    url,
    'DELETE',
    data
  );
}

// Post data from MockAPI
export const post = async (url: string, data: ICustomerData) => {
  return await apiRequest<ICustomerData, ICustomerData>(
    url,
    'POST',
    data
  );
}
// Fetches data from the API.
export const fetchDataFromAPI = async () => {
  return await get<ICustomerData[]>(API_ROUTES);
};

// Updates the data on the server.
export const updateCustomer = async (dataCutomer: ICustomerData) => {
  const id = dataCutomer.id;
  return await put(`${API_ROUTES}/${id}`, dataCutomer);
}

// Updates the data on the server.
export const addCustomer = async (dataCutomer: ICustomerData) => {
  return await post(`${API_ROUTES}`, dataCutomer);
}

// Delete the data on the server.
export const deleteCustomer = async (dataCutomer: ICustomerData) => {
  const id = dataCutomer.id;
  return await deleted(`${API_ROUTES}/${id}`, dataCutomer);
}


// Get the data on the server.
export const getCustomer = async (id: string | number) => {
  return await geted<ICustomerData>(`${API_ROUTES}/${id}`);
}
