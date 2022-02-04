module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21832dc977bbe4ac374ec605ff14be02'),
  },
});
