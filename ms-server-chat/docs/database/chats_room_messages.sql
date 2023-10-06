/* DEVELOPMENT */
DROP TABLE IF EXISTS chats_room_messages;
DROP INDEX IF EXISTS idx_chats_room_mes_room;
DROP INDEX IF EXISTS idx_chats_room_mes_last_upd_tim;
DROP INDEX IF EXISTS idx_chats_room_mes_text_cont;
/* DEVELOPMENT */

CREATE TABLE chats_room_messages(
  message_id            INT  IDENTITY NOT NULL,
  room_id               INT  NOT NULL,
  participant_id        INT  NOT NULL,
  message_text_content  TEXT NOT NULL,
  achive_content        BLOB NULL,
  last_update_timestamp TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_room_messages PRIMARY KEY(message_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_room_mes_participant FOREIGN KEY(participant_id) REFERENCES chats_room_participants(participant_id),
    CONSTRAINT fk_chats_room_mes_room FOREIGN KEY(room_id) REFERENCES chats_rooms(room_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_room_mes_text_content CHECK(message_text_content = TRIM(message_text_content)),
    CONSTRAINT ck_chats_room_mes_text_length CHECK(LENGTH(message_text_content) <= 500)
);

/* INDEXES */
CREATE INDEX idx_chats_room_mes_room
ON chats_room_messages(room_id);

CREATE INDEX idx_chats_room_mes_part
ON chats_room_messages(participant_id);

CREATE INDEX idx_chats_room_mes_last_upd_tim
ON chats_room_messages(last_update_timestamp);

CREATE INDEX idx_chats_room_mes_text_cont
ON chats_room_messages(message_text_content);