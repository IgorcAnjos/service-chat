CREATE TABLE chats_users(
  user_id          BIGINT IDENTITY NOT NULL,
  user_name        VARCHAR(100)    NOT NULL,
  user_social_name VARCHAR(100)    NOT NULL
);

-- PRIMARY KEY
ALTER TABLE chats_users
ADD CONSTRAINT pk_chats_users
PRIMARY KEY(user_id);

-- CONSTRAINT CHECKS
ALTER TABLE chats_users
ADD CONSTRAINT ck_chats_user_name
CHECK(user_name = TRIM(user_name));

ALTER TABLE chats_users
ADD CONSTRAINT ck_chats_user_social_name
CHECK(user_social_name = TRIM(user_social_name));