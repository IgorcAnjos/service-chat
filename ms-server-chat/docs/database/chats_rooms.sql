/* DEVELOPING */
DROP TABLE IF EXISTS chats_rooms;
DROP INDEX IF EXISTS idx_chats_rooms_cre_user_id;
DROP INDEX IF EXISTS idx_chats_rooms_name;
/* DEVELOPING */

CREATE TABLE chats_rooms(
  room_id               INT  IDENTITY NOT NULL,
  create_user_id        INT  NOT NULL,
  room_name             TEXT NOT NULL,
  creation_timestamp      TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_update_timestamp TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_rooms PRIMARY KEY(room_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_users_rooms FOREIGN KEY(create_user_id) REFERENCES chats_users(user_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_rooms_room_name_length CHECK(LENGTH(room_name) <= 100),
    CONSTRAINT ck_chats_rooms_creation_timestamp CHECK(creation_timestamp = datetime(creation_timestamp)),
    CONSTRAINT ck_chats_rooms_last_update_timestamp CHECK(last_update_timestamp = datetime(last_update_timestamp))
);

/* INDEXES */
CREATE INDEX idx_chats_rooms_cre_user_id
ON chats_rooms(create_user_id);

CREATE INDEX idx_chats_rooms_name
ON chats_rooms(room_name);