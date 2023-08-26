CREATE TABLE chats_user_account_details(
  user_id        BIGINT IDENTITY NOT NULL,
  user_email_id  VARCHAR(100)    NULL,
  user_telephone VARCHAR(20)     NULL
);

-- PRIMARY KEY
ALTER TABLE chats_user_account_details
ADD CONSTRAINT pk_chats_user_account_details
PRIMARY KEY(user_id);

-- FOREIGN KEY
ALTER TABLE chats_user_account_details
ADD CONSTRAINT fk_chats_users_account_details
FOREIGN KEY(user_id)
REFERENCES chats_users(user_id);

-- CONSTRAINT CHECKS
ALTER TABLE chats_user_account_details
ADD CONSTRAINT ck_chats_acc_det_email_tel
CHECK (
  user_email_id IS NULL AND user_telephone IS NULL
  OR
  user_email_id IS NOT NULL AND user_telephone IS NOT NULL
);