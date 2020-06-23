export const getCookie = (key) => {
  const cookies = {
    jwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9maWxlX3VybCI6Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNTgzNTU0OTk_dj00IiwidXNlcl9uYW1lIjoiaHlld29uMzkzOCIsImV4cCI6MTU5MzA4Mjc3M30.zAgZeUwjTGDDxLXko84YXaXYmt7_AcjcjuZo_h7olbQ',
    profile: 'https://avatars3.githubusercontent.com/u/58355499?v=4',
    id: 'hyewon3938'
  };

  return cookies[key];
};
