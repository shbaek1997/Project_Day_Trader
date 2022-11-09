import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//로그인이 안되어있다:
// Home, Login, SignUp이 보여야 한다. 간단하게 NavLink의 active 기능을 활용해서 navbar를 만들자..
//로그인이 되어있다:
// 항상 Home, PlayGame, Profile (current status) -profile을 클릭하면 모달이 떠서 로그아웃, 상세 내용...  같은 것들이 보여야한다.
//그러면 그냥 Login status에 따라 바뀔 2개의 Navbar만 만들면 될것 같다.
const Nav = () => {
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  {
    if (!isLoggedIn) {
      return (
        <StyledNav>
          <StyledNavContainer>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
          </StyledNavContainer>
          <StyledNavContainer>
            <StyledNavLink to={'/login'}>Login</StyledNavLink>
            <StyledNavLink to={'/signup'}>SignUp</StyledNavLink>
          </StyledNavContainer>
        </StyledNav>
      );
    }
    return (
      <StyledNav>
        <StyledNavContainer>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
          <StyledNavLink to={'/login'}>Play Game</StyledNavLink>
        </StyledNavContainer>
        <StyledNavContainer>
          <StyledNavLink to={'/signup'}>My Profile</StyledNavLink>
        </StyledNavContainer>
      </StyledNav>
    );
  }
};
//my profile은 링크보다는 누르면 마이페이지 관리, 현재 자산현황, 로그아웃 등을 갈수 있는 모달이 뜨게.. , 옆에 프로필 이미지도 있으면 좋을 듯함.
const StyledNavLink = styled(NavLink)`
  margin: 0 2rem;
  color: white;
  text-decoration: none;
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 6vh;
`;
const StyledNavContainer = styled.div`
  margin: 1rem 2rem;
`;
export default Nav;
