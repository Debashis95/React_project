import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layouts/Root'
import ProductList from './components/pages/ProductList'
import Cart from './components/pages/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/product/list',
          element: <ProductList />,
        },
        {
          path: '/product/cart',
          element: <Cart />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
