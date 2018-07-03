USE HooliXYZ ;
-- -----------------------------------------------------
-- Table `HooliXYZ`.`Folder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS Folder;
-- -----------------------------------------------------
-- Table `HooliXYZ`.`File`
-- -----------------------------------------------------
DROP TABLE IF EXISTS File ;

-- CREATE TABLE IF NOT EXISTS File (
--   fileId INT(11) NOT NULL,
--   fileName VARCHAR(256) NOT NULL,
--   fileSize INT(20) NOT NULL,
--   username VARCHAR(45) NOT NULL,
--   PRIMARY KEY (fileId),
--   INDEX username (username ASC),
--   CONSTRAINT file_ibfk_1
--     FOREIGN KEY (username)
--     REFERENCES User (username))
-- ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`Whitelist`
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Whitelist ;

CREATE TABLE IF NOT EXISTS Whitelist (
  whiteListId INT(11) NOT NULL,
  ip VARCHAR(45) NOT NULL,
  username VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (whiteListId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`User`
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS User ;

CREATE TABLE IF NOT EXISTS User (
  userId INT(11) NOT NULL,
  username VARCHAR(45) NOT NULL,
  userPass VARCHAR(256) NOT NULL,
  salt VARCHAR(64) NOT NULL,
  email VARCHAR(256) NOT NULL,
  whiteListId INT(11) NOT NULL,
  PRIMARY KEY (username),
  INDEX whiteListId_idx (whiteListId ASC),
  CONSTRAINT whiteListId
    FOREIGN KEY (whiteListId)
    REFERENCES Whitelist (whiteListId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`Login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS Login;

CREATE TABLE IF NOT EXISTS Login (
  loginId INT(11) NOT NULL AUTO_INCREMENT,
  ip VARCHAR(45) NOT NULL,
  username VARCHAR(45) NULL DEFAULT NULL,
  logEntryTime DATETIME NOT NULL,
  successOrFail VARCHAR(10) NOT NULL,
  PRIMARY KEY (loginId),
  INDEX userId_idx (username ASC),
  CONSTRAINT username
    FOREIGN KEY (username)
    REFERENCES User (username)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`UserFolder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS UserFolder ;

SHOW ENGINE INNODB STATUS;
