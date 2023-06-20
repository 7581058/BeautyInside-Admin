import { createBrowserRouter } from 'react-router-dom'
import { ProductManage } from './ProductManage'
import { PurchaseManage } from './PurchaseManage'
import { DashBoard } from './DashBoard'
import App from '../App'
import { ProductAdd } from './ProductAdd'
import { ProductDetail } from './ProductDetail'
import { ProductEdit } from './ProductEdit'
import { UserList } from './UserList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <DashBoard />,
      },
      {
        path: 'product',
        element: <ProductManage />,
      },
      {
        path: 'purchase',
        element: <PurchaseManage />,
      },
      {
        path: 'userlist',
        element: <UserList />,
      },
      {
        path: 'productadd',
        element: <ProductAdd />,
      },
      {
        path: 'productdetail',
        element: <ProductDetail />,
      },
      {
        path: 'productedit',
        element: <ProductEdit />,
      },
    ],
  },
])

export default router
