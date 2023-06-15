import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const AdminNav = () => {
  return (
    <SideMenu>
      <div className="logo-wrap">
        <Logo />
        <span>| 관리자</span>
      </div>
      <div className="menu-wrap">
        <MenuItem to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          대시보드
        </MenuItem>
        <MenuItem to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
          상품관리
        </MenuItem>
        <MenuItem to="/purchase" className={({ isActive }) => (isActive ? 'active' : '')}>
          거래 내역 관리
        </MenuItem>
      </div>
    </SideMenu>
  )
}

const SideMenu = styled.div`
  position: absolute;
  width: 230px;
  height: 100%;
  border-right: 2px solid #f3f3f3;
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
    margin-top: 128px;
  }
`
const Logo = styled.div`
  width: 150px;
  height: 48px;
  background-image: url('./assets/logo.png');
  background-repeat: no-repeat;
  background-color: #fff;
`

const MenuItem = styled(NavLink)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 50px;
  text-decoration: none;
  color: #000;
  &.active {
    box-sizing: border-box;
    border-left: 10px solid #ffa9be;
    background-color: #f3f3f3;
    padding-left: 40px;
  }
`
