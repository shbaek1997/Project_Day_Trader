// 홈화면
// 로그인 화면- play as guest? -local같은곳에 저장을 하거나 해야하는데 어려울듯?
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hook/useInput';
import Nav from '../Components/Nav';
import * as Api from '../Utils/api';
const LogIn = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const user = await Api.post('user/login', { email, password });
    console.log(user);
    if (user) {
      navigate('/');
    }
  };
  return (
    <>
      <Nav></Nav>
      <StyledLoginContainer>
        <StyledTitle>Day Trader Game Beta</StyledTitle>
        <StyledForm onSubmit={handleLoginSubmit}>
          <StyledLoginDiv>
            <StyledLabel htmlFor="email_input">Email Address</StyledLabel>
            <StyledInput
              placeholder="Enter your email address"
              id="email_input"
              type={'email'}
              value={email}
              onChange={onChangeEmail}></StyledInput>
          </StyledLoginDiv>
          <StyledLoginDiv>
            <StyledLabel htmlFor="password_input">Password</StyledLabel>
            <StyledInput
              placeholder="Enter your password"
              id="password_input"
              type={'password'}
              value={password}
              onChange={onChangePassword}></StyledInput>
          </StyledLoginDiv>

          <StyledButton>Login</StyledButton>
          <StyledButton>Sign in with Google</StyledButton>
        </StyledForm>
        <StyledBottom>
          <StyledLink to={'/signup'}>Sign Up</StyledLink>
          <span>|</span>
          <StyledLink to={'/reset-password'}>Forgot Password</StyledLink>
        </StyledBottom>
      </StyledLoginContainer>
    </>
  );
};
const StyledLink = styled(Link)`
  margin: 0rem 1rem;
`;
const StyledBottom = styled.div``;
const StyledButton = styled.button`
  width: 25rem;
  height: 3rem;
  margin-bottom: 1rem;
  border: none;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLoginContainer = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;
const StyledTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

const StyledInput = styled.input`
  width: 25rem;
  height: 3rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: solid 1px rgb(240, 240, 240);
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;
export default LogIn;
