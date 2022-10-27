// 홈화면
// 로그인 화면- play as guest? -local같은곳에 저장을 하거나 해야하는데 어려울듯?
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
const SignUp = () => {
  return (
    <>
      <Nav></Nav>
      <StyledLoginContainer>
        <StyledTitle>Day Trader Game Beta</StyledTitle>
        <StyledForm>
          <StyledSignUpDiv>
            <StyledLabel htmlFor="nickname_input">Nickname</StyledLabel>
            <StyledInput
              placeholder="Enter your nickname"
              id="nickname_input"
              type={'text'}></StyledInput>
          </StyledSignUpDiv>
          <StyledSignUpDiv>
            <StyledLabel htmlFor="email_input">Email Address</StyledLabel>
            <StyledInput
              placeholder="Enter your email address"
              id="email_input"
              type={'email'}></StyledInput>
          </StyledSignUpDiv>
          <StyledSignUpDiv>
            <StyledLabel htmlFor="password_input">Password</StyledLabel>
            <StyledInput
              placeholder="Enter your password"
              id="password_input"
              type={'password'}></StyledInput>
          </StyledSignUpDiv>
          <StyledSignUpDiv>
            <StyledLabel htmlFor="repeat_password_input">Repeat Password</StyledLabel>
            <StyledInput
              placeholder="Enter your password again"
              id="repeat_password_input"
              type={'password'}></StyledInput>
          </StyledSignUpDiv>

          <StyledButton>Sign Up</StyledButton>
        </StyledForm>
        <StyledBottom>
          <span>Already have an account?</span>
          <StyledLink to={'/login'}>Log in</StyledLink>
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

const StyledSignUpDiv = styled.div`
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
export default SignUp;
