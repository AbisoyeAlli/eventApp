module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c6df6fe6963edf16bb93c852fb1fc89b'),
  },
});
