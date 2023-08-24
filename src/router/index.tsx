import { lazy } from 'react'
import { createBrowserRouter } from "react-router-dom";
// import Home from '@/views/home'
// import Table from '@/views/table'
const Home = lazy(() => import('@/views/home'))
const Table = lazy(() => import('@/views/table'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/table",
    element: <Table></Table>,
  },
]);

export default  router