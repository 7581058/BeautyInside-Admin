import GlobalStyles from './styles/GlobalStyle'
import { AdminHeader } from './components/AdminHeader'
import { AdminNav } from './components/AdminNav'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AdminHeader />
      <AdminNav></AdminNav>
      <Outlet></Outlet>
    </>
  )
}
