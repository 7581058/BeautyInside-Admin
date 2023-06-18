import styled from 'styled-components'
import { MdLogout } from 'react-icons/md'

export const AdminHeader = () => {
  return (
    <Header>
      <LogoutButton>
        <MdLogout />
      </LogoutButton>
    </Header>
  )
}

const Header = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 230px);
  height: 64px;
  background-color: ${(props) => props.theme.colors.primary};
  background-color: #fff;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_2};
  z-index: 11;
  display: flex;
  justify-content: right;
  align-items: center;
`

const LogoutButton = styled.button`
  width: 36px;
  height: 36px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: transparent;
  border: none;
`
