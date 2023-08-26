import { Router } from 'express';

const messagesRouter = Router();

messagesRouter.get('/', (req, res) => {
  const response = 'oi';
  console.log(response);
  res.send(response);
});

messagesRouter.get('/messages', (req, res) => {
  const response = 'oi';
  console.log(response);
  res.send(response);
});

export { messagesRouter };