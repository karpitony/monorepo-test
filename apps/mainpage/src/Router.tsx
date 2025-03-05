import { RouterProvider, createBrowserRouter } from 'react-router';
import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import Recruit from '@/pages/Apply';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/NotFound';
import News from '@/pages/News';
import FAQ from '@/pages/FAQ';
import MaintainPage from '@/pages/MaintainPage';

const IS_MAINTENANCE = false; // 유지보수 모드 ON/OFF 설정은 여기서 해주시면 됩니다.

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
        { path: '/recruit', element: <Recruit /> },
        { path: '/blog', element: <Blog /> },
        { path: '/news', element: <News /> },
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
