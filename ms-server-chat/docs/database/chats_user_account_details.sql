/* DEVELOPMENT */
DROP TABLE IF EXISTS chats_user_account_details;
DROP INDEX IF EXISTS idx_user_acc_det_email;
DROP INDEX IF EXISTS idx_user_acc_det_telephone;
/* DEVELOPMENT */

CREATE TABLE chats_user_account_details(
  user_id        INT  IDENTITY NOT NULL,
  user_email     TEXT NULL,
  user_telephone TEXT NULL,
  /* PRIMARY KEY */
    CONSTRAINT pk_chats_user_account_details PRIMARY KEY(user_id),
  /* FOREIGN KEY */
    CONSTRAINT fk_chats_users_account_details FOREIGN KEY(user_id) REFERENCES chats_users(user_id),
  /* CONSTRAINT CHECKS */
    CONSTRAINT ck_chats_acc_det_email_length CHECK(LENGTH(user_email) <= 100),
    CONSTRAINT ck_chats_acc_det_telephone_length CHECK(LENGTH(user_telephone) <= 20)
);

CREATE UNIQUE INDEX idx_user_acc_det_email
ON chats_user_account_details(user_email)
WHERE user_email IS NOT NULL;

CREATE UNIQUE INDEX idx_user_acc_det_telephone
ON chats_user_account_details(user_telephone)
WHERE user_telephone IS NOT NULL;