SET NAMES UTF8;
DROP DATABASE IF EXISTS aw;
create DATABASE aw CHARSET = UTF8;
use aw;
/*music family*/
CREATE TABLE aw_music_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(16)
);
/*music list*/
CREATE TABLE aw_music_list(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    family_id INT,
    song_name VARCHAR(32),
    album VARCHAR(32),
    singer_name VARCHAR(32),
    stime VARCHAR(8),
    audio_href VARCHAR(128),
    vedio_href VARCHAR(128),
    add_time DATE
)
/*singer list*/
-- CREATE TABLE aw_singer_list(
--     sid INT PRIMARY KEY,
--     sno INT,
--     avatar VARCHAR(64),
--     intro VARCHAR(256)
-- )
/*user_list*/
-- CREATE TABLE aw_user_list(
--     uid INT PRIMARY KEY,
--     uname VARCHAR(16),
--     upwd VARCHAR(9),
--     account VARCHAR(32),
--     email VARCHAR(64),
--     gender INT(1),
--     avatar VARCHAR(128),
--     collect INT
-- )
/*carousel*/
-- CREATE TABLE carousel(
--     cid INT(100) PRIMARY KEY,
--     cname VARCHAR(32),
--     title VARCHAR(32),
--     href VARCHAR(128)
-- )