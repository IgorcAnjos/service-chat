/* DEVELOPMENT */
DROP TABLE IF EXISTS chats_user_session;
DROP INDEX IF EXISTS idx_chats_ses_ip_device_token;
DROP INDEX IF EXISTS idx_chats_ses_user_id;
/* DEVELOPMENT */

CREATE TABLE chats_user_session(
  session_id                 INT  IDENTITY NOT NULL,
  user_id                    INT  NOT NULL,
  session_create_timestamp   TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
  session_ip_device_token    TEXT NULL,
  session_device_description TEXT NULL,
  session_token              TEXT NOT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_session_id PRIMARY KEY(session_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_users_user_session FOREIGN KEY(user_id) REFERENCES chats_users(user_id),
  /* FOREIGN KEY */
    CONSTRAINT ck_chats_ses_ip_dev_token CHECK(session_ip_device_token = TRIM(session_ip_device_token)),
    CONSTRAINT ck_chats_ses_ip_dev_token_length CHECK(LENGTH(session_ip_device_token) < 500),
    CONSTRAINT ck_chats_ses_dev_desc CHECK(session_device_description = TRIM(session_device_description)),
    CONSTRAINT ck_chats_ses_dev_desc_length CHECK(LENGTH(session_device_description) < 300),
    CONSTRAINT ck_chats_ses_token CHECK(session_token = TRIM(session_token)),
    CONSTRAINT ck_chats_ses_token CHECK(LENGTH(session_token) < 50)
);

/* INDEXES */
CREATE INDEX idx_chats_ses_user_id
ON chats_user_session(user_id);

CREATE INDEX idx_chats_ses_ip_device_token
ON chats_user_session(session_ip_device_token)
WHERE session_ip_device_token IS NOT NULL

