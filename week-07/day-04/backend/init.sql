create table posts (
postId int NOT NULL AUTO_INCREMENT,
poster varchar(255),
postTime bigint,
postTitle varchar(255),
postUrl varchar(255),
vote int DEFAULT 0,
PRIMARY KEY (postId)
);