import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import Apply from '@/pages/Apply';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/NotFound';
import FAQ from '@/pages/FAQ';
import MaintainPage from '@/pages/MaintainPage'

const IS_MAINTENANCE = true; // 유지보수 모드 ON/OFF 설정은 여기서 해주시면 됩니다.

export default function Router() {
  if (IS_MAINTENANCE) {
    return <MaintainPage />; 
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/apply', element: <Apply /> },
        { path: '/blog', element: <Blog /> },
        { path: '/FAQ', element: <FAQ /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
