import { useState, useEffect } from 'react';
import getUser from '../Utils/auth';
import AuthContext from './AuthContext';

//props.children은 그 컴포넌트 하위 컴포넌트가 전달됨.
//user 세팅할때, api요청으로 받는 형식에 맞춰야할듯..
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    auth: false
  });
  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
