use issue;

INSERT INTO user (name, password, profile_image)
VALUES ('lynn', 'lynn', 'image'),
       ('ari', 'ari', 'image'),
       ('joy', 'joy', 'image');

INSERT INTO label (title, background_color, text_color, description)
VALUES ('BE', '#fcb27e', '#ffffff', '백엔드'),
       ('FE', '#0a2f6b', '#ffffff', '프론트엔드'),
       ('feature', '#68ff36', '#ffffff', '기능 추가'),
       ('enhancement', '#a2eeef', '#ffffff', 'New feature or request');

INSERT INTO milestone (title, due_by, description)
VALUES ('[BE] 1주차', '2020-06-05', '1주차'),
       ('[BE] 2주차', '2020-06-12', '2주차'),
       ('[FE] 1주차', '2020-06-06', '1주차');

INSERT INTO issue (title, content, emoji, is_open, created_at, image, writer, milestone)
VALUES ('[BE] 프로젝트 세팅', '내용 내용', '이모지..', true, '2020-06-03T14:25:10', '이미지', 1, 1),
       ('[FE] UI', 'FE 내용 내용', '이모지..', true, '2020-06-02T15:25:10', '이미지', 2, 3);

INSERT INTO comment (content, emoji, created_at, issue, writer)
VALUES ('뭐야 이거', '이모지..', '2020-06-04T14:25:10', 1, 1),
       ('확인~~', '이모지..', '2020-06-03T11:25:10', 2, 3);

INSERT INTO issue_label (issue, label)
VALUES (1,1),
       (1,3),
       (2,2),
       (2,3);

INSERT INTO assignee (issue, user)
VALUES (1, 1),
       (2, 2),
       (2, 3);
