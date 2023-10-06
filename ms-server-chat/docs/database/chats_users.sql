/* DEVELOPING */
DROP TABLE IF EXISTS chats_users;
DROP INDEX IF EXISTS idx_chats_users_social_name;
/* DEVELOPING */
CREATE TABLE chats_users(
  user_id            INT  IDENTITY NOT NULL,
  user_name          TEXT NOT NULL,
  user_social_name   TEXT NOT NULL,
  creation_timestamp TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_users PRIMARY KEY(user_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_user_name CHECK(user_name = TRIM(user_name)),
    CONSTRAINT ck_chats_user_name_length CHECK(LENGTH(user_name) <= 100),
    CONSTRAINT ck_chats_user_social_name CHECK(user_social_name = TRIM(user_social_name)),
    CONSTRAINT ck_chats_user_social_name_length CHECK(LENGTH(user_social_name) <= 100),
    CONSTRAINT ck_chats_user_creation_timestamp CHECK(creation_timestamp = datetime(creation_timestamp))
);

/* INDEXS */
CREATE INDEX idx_chats_users_social_name
ON chats_users(user_social_name);