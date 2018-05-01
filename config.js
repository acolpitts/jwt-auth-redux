// NODE ENV
const ENV = process.env.NODE_ENV || 'development';

// API Servers
const AUTH_API_DEV = "http://localhost:3090";
const AUTH_API_PROD = "https://stormy-journey-72746.herokuapp.com";
const AUTH_API = ( ENV === "production" ) ? AUTH_API_PROD : AUTH_API_DEV

export default {
  ENV,
  AUTH_API
};