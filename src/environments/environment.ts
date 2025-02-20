declare const process: any;
export const environment = {
  production: false,
  apiUrl: 'http://localhost:1337/api',
  apiToken: process.env['API_TOKEN'] || ''
};
