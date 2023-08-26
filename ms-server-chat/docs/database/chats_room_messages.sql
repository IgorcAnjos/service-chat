CREATE TABLE chats_room_messages(
  message_id                    BIGINT IDENTITY NOT NULL,
  room_id                       BIGINT          NOT NULL,
  create_message_participant_id BIGINT          NOT NULL,
  message_text_content          NVARCHAR(500)   NOT NULL,
  achive_content                BLOB            NULL,
  create_timestamp              DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- PRIMARY KEY
ALTER TABLE chats_room_messages
ADD CONSTRAINT pk_chats_room_messages
PRIMARY KEY(message_id);