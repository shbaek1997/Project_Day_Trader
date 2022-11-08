import * as Api from './api';
const signup = async (email, nickname, password, repeatPassword) => {
  const user = await Api.post('user/signup', {
    email,
    nickname,
    password,
    confirmPassword: repeatPassword
  });
  return user;
};

const login = async (email, password) => {
  const user = await Api.post('user/login', {
    email,
    password
  });
  return user;
};

const logout = async () => {
  await Api.get('user/logout');
};

const checkUser = async () => {
  const user = await Api.get('user/protected');
  return user;
};

const authService = {
  signup,
  login,
  logout,
  checkUser
};

export default authService;
