import Header from '@/components';
import { Footer } from '@/components';
import { Outlet, useLocation } from 'react-router';

export default function Layout() {
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* apply 페이지가 아닐 때만 푸터를 표시 */}
      {location.pathname !== '/Apply' && <Footer />}
    </>
  );
}
