/* DEVELOPING */
DROP TABLE IF EXISTS chats_room_participants;
DROP INDEX IF EXISTS idx_chats_room_part_room;
DROP INDEX IF EXISTS idx_chats_room_part_user_id;
DROP INDEX IF EXISTS idx_chats_room_part_admin;
/* DEVELOPING */
CREATE TABLE chats_room_participants(
  participant_id             INT  IDENTITY NOT NULL,
  room_id                    INT  NOT NULL,
  user_id                    INT  NOT NULL,
  participant_name           TEXT NOT NULL,
  participant_admin_boolean  TEXT NOT NULL,
  participant_active_boolean TEXT NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_room_participants PRIMARY KEY(participant_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_room_part_chats_room FOREIGN KEY(room_id) REFERENCES chats_rooms(room_id),
    CONSTRAINT fk_chats_room_part_users FOREIGN KEY(user_id) REFERENCES chats_users(user_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_room_part_name CHECK(participant_name = TRIM(participant_name)),
    CONSTRAINT ck_chats_room_part_name_length CHECK(LENGTH(participant_name) <= 100),
    CONSTRAINT ck_chats_room_part_admin_boolean CHECK(participant_admin_boolean IN('Y', 'N')),
    CONSTRAINT ck_chats_room_part_active_boolean CHECK(participant_active_boolean IN('Y', 'N'))
);

/* INDEXES */
CREATE INDEX idx_chats_room_part_room_id
ON chats_room_participants(room_id);

CREATE INDEX idx_chats_room_part_user_id
ON chats_room_participants(user_id);

CREATE INDEX idx_chats_room_part_admin
ON chats_room_participants(participant_admin_boolean)
WHERE participant_admin_boolean IS 'Y';