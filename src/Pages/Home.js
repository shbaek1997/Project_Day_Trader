// 홈화면
import Nav from '../Components/Nav';
import styled from 'styled-components';
const Home = () => {
  const isLoggedIn = false;
  return (
    <>
      <Nav></Nav>
      <StyledHomeContainer>
        <h1>Day Trader Game Beta</h1>
        <p>Test your day trading skills by trading stocks using real intraday stock data!</p>
        <p>{isLoggedIn ? 'Welcome back user' : 'Start playing by logging in'}</p>
      </StyledHomeContainer>
    </>
  );
};
const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
  background-image: url(https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
  background-size: cover;
`;

export default Home;
