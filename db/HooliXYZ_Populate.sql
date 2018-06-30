INSERT INTO Folder
  (folderId, folderName)
VALUES
  (1, 'Repo_1'),
  (2, 'Repo_2'),
  (3, 'Repo_3');

INSERT INTO File
	(fileId, fileName, fileSize, folderId)
VALUES
	(1, 'File_1_Repo_1', 100, 1),
  (2, 'File_2_Repo_1', 10, 1),
  (3, 'File_3_Repo_1', 1, 1),
  (4, 'File_1_Repo_2', 200, 2),
  (5, 'File_2_Repo_2', 20, 2),
  (6, 'File_1_Repo_3', 3, 3);

INSERT INTO Whitelist
	(whiteListId, ip, username)
VALUES
	(1, '127.0.0.1', 'root'),
  (2, '172.217.11.174', 'google_user');

INSERT INTO User
	(userId, username, userPass, salt, email, whiteListId)
VALUES
	(1, 'root', 'encrypted_pass_1', 'salt_for_encryption_1', 'root@colorado.edu', 1),
  (2, 'google_user', 'encrypted_pass_2', 'salt_for_encryption_2', 'gous0000@colorado.edu', 2);

INSERT INTO Login
	(loginId, ip, userId, username, logEntryTime, successOrFail)
VALUES
	(1, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:01', 'fail'),
  (2, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:02', 'fail'),
  (3, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:03', 'fail'),
  (4, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:04', 'fail'),
  (5, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:05', 'fail'),
  (6, '8.8.8.8', NULL, 'root', '2018-06-23 10:41:10', 'fail'),
  (7, '127.0.0.1', 1, 'root', '2018-06-23 11:01:47', 'success'),
  (8, '172.217.11.174', 2, 'google_user', '2018-06-25 06:47:15', 'fail'),
  (9, '172.217.11.174', 2, 'google_user', '2018-06-25 06:47:31', 'fail'),
  (10, '172.217.11.174', 2, 'google_user', '2018-06-25 06:47:49', 'success');

INSERT INTO UserFolder
	(userId, folderId)
VALUES
	(1,1),
  (1,2),
  (2,3);
