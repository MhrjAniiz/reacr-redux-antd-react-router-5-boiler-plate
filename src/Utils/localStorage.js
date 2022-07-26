const SESSION_KEY = "userInfo";

export const getLocalSession = () => {
  const data = localStorage.getItem(SESSION_KEY);

  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    return null;
  }

  return null;
};

export const setLocalSession = (data) => {
  if (data) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  }
};

export const clearLocalSession = () => localStorage.removeItem(SESSION_KEY);

export const isLogin = () => !!localStorage.getItem(SESSION_KEY);
