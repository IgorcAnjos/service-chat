import express from 'express';
import { messagesRouter } from '../controller/messages';

export const routers: express.Router[] = [
  messagesRouter
];