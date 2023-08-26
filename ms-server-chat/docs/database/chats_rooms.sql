CREATE TABLE chats_rooms(
  room_id               BIGINT IDENTITY                    NOT NULL,
  create_user_id        BIGINT                             NOT NULL,
  room_name             VARCHAR(100)                       NOT NULL,
  create_timestamp      DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_update_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- PRIMARY KEY
ALTER TABLE chats_rooms
ADD CONSTRAINT pk_chats_rooms
PRIMARY KEY(room_id);

-- FOREIGN KEY
ALTER TABLE chats_rooms
ADD CONSTRAINT fk_chats_users_rooms
FOREIGN KEY(create_user_id)
REFERENCES chats_users(user_id);

-- INDEXES
CREATE INDEX idx_chats_rooms_cre_user_id
ON chats_rooms(create_user_id);

CREATE INDEX idx_chats_rooms_name
ON chats_rooms(room_name);