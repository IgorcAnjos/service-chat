CREATE TABLE chats_room_participants(
  participant_id             BIGINT IDENTITY NOT NULL,
  room_id                    BIGINT          NOT NULL,
  user_id                    BIGINT          NOT NULL,
  participant_admin          CHAR(1)         NOT NULL,
  active_participant_boolean CHAR(1)         NOT NULL
);

-- PRIMARY KEY
ALTER TABLE chats_room_participants
ADD CONSTRAINT pk_chats_room_participants
PRIMARY KEY(participant_id);

-- FOREIGN KEY
ALTER TABLE chats_room_participants
ADD CONSTRAINT fk_chats_roo_roo_participants
FOREIGN KEY(room_id)
REFERENCES chats_rooms(room_id);

ALTER TABLE chats_room_participants
ADD CONSTRAINT fk_chats_user_roo_part
FOREIGN KEY(user_id)
REFERENCES chats_users(user_id);

-- CONSTRAINT CHECKS
ALTER TABLE chats_room_participants
ADD CONSTRAINT ck_chats_participant_name
CHECK(participant_name = TRIM(participant_name));

ALTER TABLE chats_room_participants
ADD CONSTRAINT ck_chats_participant_admin
CHECK(
  participant_admin IN(
    'Y',
    'N'
  )
);

-- INDEX
CREATE INDEX idx_chats_room_part_room_id
ON chats_room_participants(room_id);

CREATE INDEX idx_chats_room_part_user_id
ON chats_room_participants(user_id);

CREATE INDEX idx_chats_room_part_admin
ON chats_room_participants(participant_admin)
WHERE participant_admin IS 'Y';