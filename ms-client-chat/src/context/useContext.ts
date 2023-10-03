import { useContext } from 'react';
import { SocketContext } from './socket';

export function useSocket() {
  return useContext(SocketContext);
}