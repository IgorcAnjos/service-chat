import * as dotenv from 'dotenv';
dotenv.config();

export const API_PORT = Number(process.env.API_PORT) || 8080;
export const API_PREFIX_ROUTER = process.env.API_PREFIX_ROUTER ?? '/';