use issue;

INSERT INTO user (name, password, profile_image)
VALUES ('lynn', 'lynn', 'https://ca.slack-edge.com/T74H5245A-URQ8K2R43-1fa8354b8820-512'),
       ('ari', 'ari', 'https://ca.slack-edge.com/T74H5245A-URXGCRKC5-f6ea34e9339f-512'),
       ('joy', 'joy', 'https://ca.slack-edge.com/T74H5245A-US159PX2S-cc84cf6304d2-512'),
       ('ari_joy', 'ari_joy', 'https://avatars0.githubusercontent.com/u/33659848?s=400&v=4');

INSERT INTO label (title, background_color, text_color, description)
VALUES ('BE', '#F76B4D', '#000000', '백엔드'),
       ('FE', '#B48CFE', '#000000', '프론트엔드'),
       ('feature', '#2F2FDE', '#ffffff', '기능 추가'),
       ('enhancement', '#39489e', '#ffffff', 'New feature or request'),
       ('scrum', '#559434', '#ffffff', 'scrum');

INSERT INTO milestone (title, due_by, description)
VALUES ('[BE] 1주차', '2020-06-05', '1주차'),
       ('[BE] 2주차', '2020-06-12', '2주차'),
       ('[FE] 1주차', '2020-06-06', '1주차');

INSERT INTO issue (issue_uuid ,title, content, is_open, created_at, writer, milestone)
VALUES ('uuid1', '[BE] 프로젝트 세팅', '내용 내용', true, '2020-06-03T14:25:10', 1, 1),
       ('uuid2', '[FE] UI', 'FE 내용 내용', true, '2020-06-02T15:25:10', 2, 3);

INSERT INTO issue (issue_uuid, title, content, is_open, created_at, writer)
VALUES ('uuid3', '[BE] DB 설계', 'DB 설계하기', true, '2020-06-07T05:25:10', 1),
       ('uuid4', '[BE] cors', 'cors', false, '2020-06-08T05:25:10', 1),
       ('uuid5', '[TEAM] 101010 scrum', 'cors', true, '2020-06-08T05:25:10', 3),
       ('uuid6', '[FE] 리액트', '리액트', true, '2020-06-08T05:25:10', 2),
       ('uuid7', '[기타] 테스트', '라벨라벨', true, '2020-06-08T07:25:10', 1);

INSERT INTO comment (content, created_at, issue, writer)
VALUES ('뭐야 이거', '2020-06-04T14:25:10', 1, 1),
       ('확인~~', '2020-06-03T11:25:10', 2, 3);

INSERT INTO issue_label (issue, label)
VALUES (1,1),
       (1,3),
       (2,2),
       (2,3),
       (3,1),
       (4,1),
       (5,5),
       (6,2),
       (6,3);

INSERT INTO assignee (issue, user)
VALUES (1, 1),
       (2, 2),
       (2, 3),
       (2, 4),
       (5, 1),
       (5, 2),
       (5, 3),
       (5, 4),
       (6, 2),
       (6, 4);

INSERT INTO image (url, issue)
VALUES ('image1', 1),
       ('image2', 1),
       ('image11', 2);

INSERT INTO issue_emoji (emoji, issue)
VALUES ('😀', 1),
       ('😂', 1),
       ('🥰', 2);

INSERT INTO comment_emoji (emoji, comment)
VALUES ('🤐', 1),
       ('😪', 1),
       ('👾', 2);
