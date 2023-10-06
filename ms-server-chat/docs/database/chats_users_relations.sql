/* DEVELOPING */
DROP TABLE IF EXISTS chats_users_relations;
DROP INDEX IF EXISTS idx_chats_rooms_primary_user;
DROP INDEX IF EXISTS idx_chats_rooms_secundary_user;
/* DEVELOPING */

CREATE TABLE chats_users_relations(
  primary_user_id   INT IDENTITY NOT NULL,
  secundary_user_id INT NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_users_relations PRIMARY KEY(primary_user_id, secundary_user_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_users_relations_one FOREIGN KEY(primary_user_id) REFERENCES chats_users(user_id),
    CONSTRAINT fk_chats_users_rooms_two FOREIGN KEY(secundary_user_id) REFERENCES chats_users(user_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_users_relations_order CHECK(primary_user_id < secundary_user_id)
);

CREATE INDEX idx_chats_rooms_primary_user
ON chats_users_relations(primary_user_id);

CREATE INDEX idx_chats_rooms_secundary_user
ON chats_users_relations(secundary_user_id);
