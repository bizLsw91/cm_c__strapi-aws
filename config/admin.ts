export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  adminUrl: {
    domain: env('PUBLIC_URL') ? env('PUBLIC_URL') : 'localhost'+env('PORT')
  },
  preview: {
    enabled: false, // false로 설정 시 Preview 기능 비활성화
  },
  url: '/dashboard',
});
