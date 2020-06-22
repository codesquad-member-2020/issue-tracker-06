drop table if exists issue_label;
drop table if exists comment;
drop table if exists assignee;
drop table if exists image;
drop table if exists issue_emoji;
drop table if exists comment_emoji;
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
    issue_uuid varchar (255),
    title varchar (255),
    content text,
    is_open boolean default true ,
    created_at datetime default CURRENT_TIMESTAMP,
    writer int references user(user_id),
    milestone int references milestone(milestone_id)
);

create table image (
    image_id int primary key auto_increment,
    url varchar (255),
    issue int references issue(issue_id)
);

create table issue_emoji (
    issue_emoji_id int primary key auto_increment,
    emoji varchar (255),
    issue int references issue(issue_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;


create table comment_emoji (
    comment_emoji_id int primary key auto_increment,
    emoji varchar (255),
    comment int references comment(comment_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;


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
    created_at datetime,
    issue int references issue(issue_id),
    writer int references user(user_id)
);


