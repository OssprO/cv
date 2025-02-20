declare const process: any;
export const environment = {
  production: true,
  apiUrl: 'https://cv-api-osspro.wl.r.appspot.com/api',
  apiToken: process.env['API_TOKEN'] || ''
};
