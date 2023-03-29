USE planetScale ;

CREATE TABLE gf_users (
    email VARCHAR(128) PRIMARY KEY,
    pwd VARCHAR(128),
    username VARCHAR(128) DEFAULT 'username',
    status tinyint DEFAULT 0,
    
);


CREATE TABLE gf_movies (
    movieID int PRIMARY KEY AUTO_INCREMENT ,
    name VARCHAR(255),
    videoLink VARCHAR(255),
    title VARCHAR(128),
    description text,
    types VARCHAR(256),
    views int
);


CREATE TABLE gf_verification (
    vToken VARCHAR(200) PRIMARY KEY ,
    email VARCHAR(200),
    type VARCHAR(100) not NULL,
    timeOut datetime not NULL
);

-- to add later --
CREATE TABLE gf_review (
    id int PRIMARY KEY AUTO_INCREMENT ,
    context_id int not null FOREIGN KEY,
    tag VARCHAR(100) not NULL,
    type VARCHAR(100) not NULL,
    INDEX UX (tag)
);
