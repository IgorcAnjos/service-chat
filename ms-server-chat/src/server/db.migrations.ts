import fs from 'fs';
import { CommandType, Migration } from '../modules/Server/sqlite-database/types';
const chats_users = fs.readFileSync('./docs/database/chats_users.sql', 'utf8');
const chats_users_relactions = fs.readFileSync('./docs/database/chats_users_relations.sql', 'utf8');
const chat_rooms = fs.readFileSync('./docs/database/chats_rooms.sql', 'utf8');
const chats_rooms_participants = fs.readFileSync('./docs/database/chats_room_participants.sql', 'utf8');
const chats_room_messages = fs.readFileSync('./docs/database/chats_room_messages.sql', 'utf8');
const chats_user_account_details = fs.readFileSync('./docs/database/chats_user_account_details.sql', 'utf8');
const chats_user_session = fs.readFileSync('./docs/database/chats_user_session.sql', 'utf8');

export const migrationsList: Migration[] = [
  {
    name: 'chats_users',
    type: CommandType.CREATE,
    comand: chats_users
  },
  {
    name: 'chats_users_relactions',
    type: CommandType.CREATE,
    comand: chats_users_relactions
  },
  {
    name: 'chat_rooms',
    type: CommandType.CREATE,
    comand: chat_rooms
  },
  {
    name: 'chats_rooms_participants',
    type: CommandType.CREATE,
    comand: chats_rooms_participants
  },
  {
    name: 'chats_room_messages',
    type: CommandType.CREATE,
    comand: chats_room_messages
  },
  {
    name: 'chats_user_account_details',
    type: CommandType.CREATE,
    comand: chats_user_account_details
  },
  {
    name: 'chats_user_session',
    type: CommandType.CREATE,
    comand: chats_user_session
  }
];