// import React from 'react';
const {React} = window;
// import styled from 'styled-components';
const {styled} = window

import logo from '../assets/images/airbnbLogo.png'
import profileImg from '../assets/images/profileLogo.png'
import searchImg from '../assets/images/searchImg.png'

const Header = () => {
  return (
    <StripContainer>
      <HeaderContainer>
        <LogoContainer>
          <img src={logo}/>
        </LogoContainer>

        <SearchContainer>

          <img src={searchImg}/>
        </SearchContainer>

        <ProfileContainer>
          <img src={profileImg}/>
        </ProfileContainer>
      </HeaderContainer>
    </StripContainer>
  );
}
const LogoContainer = styled.div`
  width: 249px;
`

const SearchContainer = styled.div`
  border: 1px solid rgb(221, 221, 221) !important;
  border-radius: 24px !important;
  display: flex;
  align-items: center;
  width: 300px;
  height: 48px;
`
// const SearchInput = styled.input`
//   margin: 0 16px;
//   flex-grow: 1;
//   outline: none;
//   border: none;
//   ::placeholder {
//     color: #222;
//     font-size: 14px !important;
//     line-height: 18px !important;
//     font-weight: 500;
//   }
// `


const ProfileContainer = styled.div`

`
const HeaderContainer = styled.div`
  width: 1128px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StripContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
`
export default Header;
