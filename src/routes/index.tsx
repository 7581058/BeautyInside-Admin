import { createBrowserRouter } from 'react-router-dom'
import { ProductManage } from './ProductManage'
import { PurchaseManage } from './PurchaseManage'
import { DashBoard } from './DashBoard'
import App from '../App'
import { ProductAdd } from './ProductAdd'
import { ProductDetail } from './ProductDetail'

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
        path: 'productadd',
        element: <ProductAdd />,
      },
      {
        path: 'productdetail',
        element: <ProductDetail />,
      },
    ],
  },
])

export default router
