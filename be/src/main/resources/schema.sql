drop table if exists member;

create table user (
    user_id int primary key auto_increment,
    name varchar (255),
    password varchar (255),
    image varchar (255)
);


