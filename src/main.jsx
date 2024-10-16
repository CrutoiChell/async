import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root, rootLoader, rootAction } from './components/Root/Root.jsx'
import { ErrorPage404 } from './components/ErrorPage404/ErrorPage404.jsx'
import { Student } from './components/Students/Student.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const root = createBrowserRouter([
  {
    path: '/main',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'student/ch',
        element: <Student
          name='Китайские студенты'
          cost="1 миска рис"
          amount="1000"
        />
      },
      {
        path: 'student/en',
        element: <Student
          name='Американские студенты'
          cost="1 Бургер америка"
          amount="1000"
        />
      },
      {
        path: 'student/ru',
        element: <Student
          name='Российские студенты'
          cost="1 бутылка водки"
          amount="1000"
        />
      },
      {
        path: 'products/:productsId',
        element: ''
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)
