export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "storage.googleapis.com",
            "dl.airtable.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "storage.googleapis.com",
            "dl.airtable.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:8598','http://127.0.0.1:8598', 'https://cmc-renewal.vercel.app', 'https://221.168.205.41'],
      credentials: true  // ✅ 쿠키 전송 허용
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
