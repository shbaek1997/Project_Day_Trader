// 홈화면
// 로그인 화면- play as guest? -local같은곳에 저장을 하거나 해야하는데 어려울듯?
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav';
// import * as Api from '../Utils/api';
const Profile = () => {
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  const navigate = useNavigate();
  {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }
  const handleClick = (event) => {
    const url = event.target.getAttribute('url');
    console.log(url);
    // navigate('/edit');
  };
  return (
    <>
      <Nav></Nav>
      <StyledMenuContainer>
        <StyledHeading>My Page</StyledHeading>
        <div>
          <StyledMenu url={'/edit'} onClick={handleClick}>
            Edit Profile
          </StyledMenu>
          <StyledMenu>My Stocks</StyledMenu>
          <StyledMenu>Statistics</StyledMenu>
        </div>
      </StyledMenuContainer>
    </>
  );
};
export default Profile;

const StyledMenuContainer = styled.div`
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-left: 40px;
`;
const StyledMenu = styled.div`
  height: 20vh;
  background-color: black;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
