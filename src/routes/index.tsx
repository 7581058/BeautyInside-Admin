import { createBrowserRouter } from 'react-router-dom'
import { ProductManage } from './ProductManage'
import { PurchaseManage } from './PurchaseManage'
import { DashBoard } from './DashBoard'
import App from '../App'

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
    ],
  },
])

export default router
