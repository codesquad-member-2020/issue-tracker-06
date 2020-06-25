export const getCookie = (key) => {
  if (process.env.NODE_ENV === 'development') {
    const cookies = {
      jwt:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9maWxlX3VybCI6Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNTgzNTU0OTk_dj00IiwidXNlcl9uYW1lIjoiaHlld29uMzkzOCIsImV4cCI6MTU5MzA4Mjc3M30.zAgZeUwjTGDDxLXko84YXaXYmt7_AcjcjuZo_h7olbQ',
      user_profile: 'https://avatars3.githubusercontent.com/u/58355499?v=4',
      user_name: 'hyewon3938',
      user_id: '1'
    };

    return cookies[key];
  }

  let result = null;
  const cookies = document.cookie.split(';');
  cookies.some(function (item) {
    item = item.replace(' ', '');
    const cookieItems = item.split('=');
    if (key === cookieItems[0]) {
      result = cookieItems[1];
      return true;
    }
  });
  return result;
};
