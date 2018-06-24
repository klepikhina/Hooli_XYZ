CREATE DATABASE HooliXYZ;
USE HooliXYZ ;

-- -----------------------------------------------------
-- Table `HooliXYZ`.`Folder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS Folder;

CREATE TABLE IF NOT EXISTS Folder(
  folderId INT(11) NOT NULL,
  folderName VARCHAR(256) NOT NULL,
  PRIMARY KEY (folderId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`File`
-- -----------------------------------------------------
DROP TABLE IF EXISTS File ;

CREATE TABLE IF NOT EXISTS File (
  fileId INT(11) NOT NULL,
  fileName VARCHAR(256) NOT NULL,
  fileSize INT(20) NOT NULL,
  folderId INT(11) NOT NULL,
  PRIMARY KEY (fileId),
  INDEX folderId (folderId ASC),
  CONSTRAINT file_ibfk_1
    FOREIGN KEY (folderId)
    REFERENCES Folder (folderId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`Whitelist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS Whitelist ;

CREATE TABLE IF NOT EXISTS Whitelist (
  whiteListId INT(11) NOT NULL,
  ip VARCHAR(45) NOT NULL,
  username VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (whiteListId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS User ;

CREATE TABLE IF NOT EXISTS User (
  userId INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  userPass VARCHAR(256) NOT NULL,
  salt VARCHAR(64) NOT NULL,
  email VARCHAR(256) NOT NULL,
  whiteListId INT(11) NOT NULL,
  PRIMARY KEY (userId),
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
  userId INT(11) NULL,
  username VARCHAR(45) NULL DEFAULT NULL,
  logEntryTime DATETIME NOT NULL,
  successOrFail VARCHAR(10) NOT NULL,
  PRIMARY KEY (loginId),
  INDEX userId_idx (userId ASC),
  CONSTRAINT userId
    FOREIGN KEY (userId)
    REFERENCES User (userId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HooliXYZ`.`UserFolder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS UserFolder ;

CREATE TABLE IF NOT EXISTS UserFolder (
  userId INT(11) NOT NULL,
  folderId INT(11) NOT NULL,
  PRIMARY KEY (userId, folderId),
  CONSTRAINT userId_1
    FOREIGN KEY (userId)
    REFERENCES User (userId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT folderId_1
    FOREIGN KEY (folderId)
    REFERENCES Folder (folderId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW ENGINE INNODB STATUS;
