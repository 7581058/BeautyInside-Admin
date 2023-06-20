import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

export const AdminNav = () => {
  return (
    <SideMenu>
      <div className="logo-wrap">
        {/* <Logo /> */}
        {/* <span>| 관리자</span> */}
        <h3>BeautyInside</h3>
        {/* <span>| 관리자</span> */}
      </div>
      <div className="menu-wrap">
        <MenuItem to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          대시보드
          <ArrowIcon>
            <SlArrowRight />
          </ArrowIcon>
        </MenuItem>
        <MenuItem to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
          상품관리
          <ArrowIcon>
            <SlArrowRight />
          </ArrowIcon>
        </MenuItem>
        <MenuItem to="/purchase" className={({ isActive }) => (isActive ? 'active' : '')}>
          거래 내역 관리
          <ArrowIcon>
            <SlArrowRight />
          </ArrowIcon>
        </MenuItem>
        <MenuItem to="/userlist" className={({ isActive }) => (isActive ? 'active' : '')}>
          사용자 목록
          <ArrowIcon>
            <SlArrowRight />
          </ArrowIcon>
        </MenuItem>
      </div>
    </SideMenu>
  )
}

const SideMenu = styled.div`
  position: absolute;
  width: 230px;
  height: 100%;
  background-color: #353535;
  //border-right: 1px solid ${(props) => props.theme.colors.gray_1};
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
  }
  .menu-wrap {
    width: 100%;
    margin-top: 64px;
  }
  h3 {
    font-family: 'InkLipquid', 'sans-serif';
    font-size: 30px;
    color: #fff;
    color: ${(props) => props.theme.colors.primary};
    margin: 0;
  }
  span {
    color: #fff;
    margin-left: 10px;
    font-size: 18px;
  }
`
const Logo = styled.div`
  width: 150px;
  height: 48px;
  // background-image: url('./assets/logo.png');
  background-repeat: no-repeat;
  background-color: #fff;
`

const MenuItem = styled(NavLink)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 50px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text_primary};
  color: ${(props) => props.theme.colors.primary};
  &.active {
    box-sizing: border-box;
    //border-left: 10px solid ${(props) => props.theme.colors.primary};
    //background-color: #f3f3f3;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text_primary};
    //padding-left: 40px;
  }
`

const ArrowIcon = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text_secondary};
`
