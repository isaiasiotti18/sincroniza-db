-- SQLite

DROP TABLE DatabaseClients;

CREATE TABLE DatabaseClients (
	id INTEGER PRIMARY KEY,
	host TEXT NOT NULL,
	password TEXT NOT NULL,
	port INTEGER NOT NULL,
	type TEXT NOT NULL ,
	username TEXT NOT NULL,
  db_name TEXT NOT NULL,
	createdAt DATE,
	updatedAt DATE
);

UPDATE DatabaseClients
SET username = "root", password = "root_password"
WHERE id = 0;