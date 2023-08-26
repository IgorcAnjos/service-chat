CREATE TABLE chats_user_session(
  session_id                 BIGINT IDENTITY NOT NULL,
  user_id                    BIGINT          NOT NULL,
  session_create_timestamp   DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  session_ip_device_token    VARCHAR(500)    NULL,
  session_device_description VARCHAR(300)    NULL,
  session_token              VARCHAR(50)     NOT NULL
);

-- PRIMARY KEY
ALTER TABLE chats_user_session
ADD CONSTRAINT pk_chats_session_id
PRIMARY KEY(session_id);

-- FOREIGN KEY
ALTER TABLE chats_user_session
ADD CONSTRAINT fk_chats_users_user_session
FOREIGN KEY(user_id)
REFERENCES chats_users(user_id);

-- CONSTRAINT CHECKS
ALTER TABLE chats_user_session
ADD CONSTRAINT ck_chats_ses_ip_dev_token
CHECK(session_ip_device_token = TRIM(session_ip_device_token));

ALTER TABLE chats_user_session
ADD CONSTRAINT ck_chats_ses_dev_desc
CHECK(session_device_description = TRIM(session_device_description));

ALTER TABLE chats_user_session
ADD CONSTRAINT ck_chats_ses_token
CHECK(session_token = TRIM(session_token));

-- INDEXES
CREATE INDEX idx_chats_ses_ip_device_token
ON chats_user_session(session_ip_device_token);

CREATE INDEX idx_chats_ses_user_id
ON chats_user_session(user_id);

CREATE INDEX idx_chats_ses_ip_device_token
ON chats_user_session(session_ip_device_token);
WHERE session_ip_device_token IS NOT NULL

