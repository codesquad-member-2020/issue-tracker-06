drop table if exists user;

create table user (
    user_id int primary key auto_increment,
    name varchar (255),
    password varchar (255),
    profile_image varchar (255)
);


