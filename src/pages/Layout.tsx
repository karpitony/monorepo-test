import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      {/* 헤더 여기에 */}
      <main>
        <Outlet />
      </main>
      {/* 푸터 여기에 */}
    </>
  );
}