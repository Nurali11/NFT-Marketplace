module.exports = {
  // Define the locales that you want to support
  locales: ['en', 'ru', 'uz'],

  // Define the default locale
  defaultLocale: 'en',

  // Define the routing configuration
  routing: {
    // Define the route for each locale
    routes: [
      {
        locale: 'en',
        route: '/',
      },
      {
        locale: 'ru',
        route: '/ru',
      },
      {
        locale: 'uz',
        route: '/uz',
      },
    ],
  },
};