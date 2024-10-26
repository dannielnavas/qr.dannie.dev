import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  key: process.env.KEY,
}));
