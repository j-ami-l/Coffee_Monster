import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AllStudents from './AllStudents.jsx'
import Home from './Home.jsx'
import Student from './Student.jsx'
import Update from './Update.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      {
        path: "/add",
        Component: App
      },
      {
        path:'/allstudents',
        Component: AllStudents,
        loader: ()=> fetch("http://localhost:3000/allstudents")
      },
      {
        path:'/student/:id',
        Component:Student,
        loader: ({params})=> fetch(`http://localhost:3000/student/${params.id}`)
      },
      {
        path:'/student/update/:id',
        Component: Update,
        loader: ({params})=> fetch(`http://localhost:3000/student/${params.id}`)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
