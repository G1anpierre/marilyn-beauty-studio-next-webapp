const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://vercel.com/g1anpierre/marilyn-beauty-studio-next-webapp';