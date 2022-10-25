// 홈화면
// 로그인 화면- play as guest? -local같은곳에 저장을 하거나 해야하는데 어려울듯?
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <StyledLoginContainer>
      <StyledTitle>Day Trader Game Beta</StyledTitle>
      <StyledForm>
        <StyledLoginDiv>
          <StyledLabel htmlFor="email_input">Email Address</StyledLabel>
          <StyledInput placeholder="Enter your email address" id="email_input"></StyledInput>
        </StyledLoginDiv>
        <StyledLoginDiv>
          <StyledLabel htmlFor="password_input">Password</StyledLabel>
          <StyledInput placeholder="Enter your password" id="password_input"></StyledInput>
        </StyledLoginDiv>

        <StyledButton>Login</StyledButton>
        <StyledButton>Sign in with Google</StyledButton>
      </StyledForm>
      <StyledBottom>
        <StyledLink to={'/register'}>Register</StyledLink>
        <span>|</span>
        <StyledLink to={'/reset-password'}>Forgot Password</StyledLink>
      </StyledBottom>
    </StyledLoginContainer>
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
  font-size: 2rem;
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
