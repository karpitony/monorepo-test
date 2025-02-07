import { RouterProvider, createBrowserRouter } from 'react-router';
import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import Apply from '@/pages/Apply';
import NotFound from '@/pages/NotFound';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/apply', element: <Apply /> },
      ],
    },
    {
      path: '*',
      element: (
        <NotFound />
      ),
    },
  ])
  return <RouterProvider router={router} />
}