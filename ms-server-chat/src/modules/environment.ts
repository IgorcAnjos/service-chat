import { config } from 'dotenv';
config();

export const API_JWT_TOKEN = process.env.API_JWT_TOKEN ?? '';
export const API_PORT = Number(process.env.API_PORT) || 8080;
export const API_PREFIX_ROUTER = process.env.API_PREFIX_ROUTER ?? '';