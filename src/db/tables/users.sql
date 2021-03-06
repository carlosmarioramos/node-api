CREATE TABLE users (
  `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `id_role` INT NOT NULL DEFAULT 2,
  `active` BOOLEAN DEFAULT 1 NOT NULL,
  `date` DATE DEFAULT NOW() NOT NULL
);

-- ALTER TABLE users
--   ADD CONSTRAINT users_id_role_fk FOREIGN KEY (id_role)
--   REFERENCES roles (id);