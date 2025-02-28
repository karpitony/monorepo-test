import Header from '@/components';
import { Footer } from '@/components';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Header/>
       <main>
         <Outlet />
       </main>
      {/* 푸터 여기에 */}
      <Footer/>
    </>
  );
}