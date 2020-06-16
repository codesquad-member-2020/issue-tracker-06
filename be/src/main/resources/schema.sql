drop table if exists issue_label;
drop table if exists comment;
drop table if exists assignee;
drop table if exists issue;
drop table if exists label;
drop table if exists milestone;
drop table if exists user;


create table label (
    label_id int primary key auto_increment,
    title varchar (255),
    background_color varchar (255),
    text_color varchar (255),
    description varchar (255)
);

create table milestone (
    milestone_id int primary key auto_increment,
    title varchar (255),
    due_by date,
    description varchar (255)
);

create table user (
    user_id int primary key auto_increment,
    name varchar (255),
    password varchar (255),
    profile_image varchar (255)
);

create table issue (
    issue_id int primary key auto_increment,
    title varchar (255),
    content text,
    emoji varchar (255),
    is_open boolean,
    created_at datetime,
    image varchar (255),
    writer int references user(user_id),
    milestone int references milestone(milestone_id)
);

create table issue_label (
    issue_label_id int primary key auto_increment,
    issue int references issue(issue_id),
    label int references label(label_id)
);

create table assignee (
    assignee_id int primary key auto_increment,
    issue int references issue(issue_id),
    user int references user(user_id)
);

create table comment (
    comment_id int primary key auto_increment,
    content text,
    emoji varchar (255),
    created_at datetime,
    issue int references issue(issue_id),
    writer int references user(user_id)
);


