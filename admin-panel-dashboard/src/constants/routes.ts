export const API_ROUTES = process.env.VITE_API_URL as string;

export const ROUTES = {
  HOME: '/',
  CUSTOMERS: '/customers',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  MESSAGES: './messages',
  HELP_CENTRE:'./help-centre',
  DETAIL: '/customers/:id',
  FORM: '/customers/form'
};
