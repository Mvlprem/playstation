import App from '../App'
import Playstation from '../components/Pages/Playstation'
import Games from '../components/Pages/Games'
import Accessories from '../components/Pages/Accessories'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Playstation />,
      },
      {
        path: 'games',
        element: <Games />,
      },
      {
        path: 'accessories',
        element: <Accessories />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
